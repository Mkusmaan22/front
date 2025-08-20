import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';
import { Download, Share2 } from 'lucide-react';

interface PatternPreviewProps {
  patternData?: {
    grid: string[][];
    colors: { [key: string]: { color: string; symbol: string; name: string; code: string } };
    width: number;
    height: number;
  };
  isLoading: boolean;
}

const PatternPreview: React.FC<PatternPreviewProps> = ({ patternData, isLoading }) => {
  const [activeView, setActiveView] = useState<'symbols' | 'colors'>('colors');
  
  if (isLoading) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Generating Pattern...</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </CardContent>
      </Card>
    );
  }
  
  if (!patternData) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Pattern Preview</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center items-center h-64 text-gray-500">
          Upload an image and adjust settings to generate a pattern
        </CardContent>
      </Card>
    );
  }
  
  const renderGrid = () => {
    const cellSize = Math.min(300 / patternData.width, 300 / patternData.height);
    
    return (
      <div 
        className="overflow-auto border border-gray-200 rounded"
        style={{ maxHeight: '400px', maxWidth: '100%' }}
      >
        <div 
          style={{ 
            display: 'grid',
            gridTemplateColumns: `repeat(${patternData.width}, ${cellSize}px)`,
            gridTemplateRows: `repeat(${patternData.height}, ${cellSize}px)`,
          }}
        >
          {patternData.grid.map((row, rowIndex) => 
            row.map((cell, colIndex) => {
              const colorData = patternData.colors[cell];
              return (
                <div 
                  key={`${rowIndex}-${colIndex}`}
                  style={{ 
                    backgroundColor: activeView === 'colors' ? colorData.color : '#ffffff',
                    border: '0.5px solid #e5e5e5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: `${Math.max(cellSize * 0.5, 8)}px`,
                  }}
                >
                  {activeView === 'symbols' && colorData.symbol}
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  };
  
  const renderColorLegend = () => {
    return (
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
        {Object.entries(patternData.colors).map(([id, colorData]) => (
          <div key={id} className="flex items-center space-x-2 text-sm">
            <div 
              className="w-4 h-4 border border-gray-300" 
              style={{ backgroundColor: colorData.color }}
            ></div>
            <div className="w-4 h-4 flex items-center justify-center border border-gray-300">
              {colorData.symbol}
            </div>
            <span>{colorData.code} - {colorData.name}</span>
          </div>
        ))}
      </div>
    );
  };
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Pattern Preview</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="pattern" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="pattern">Pattern</TabsTrigger>
            <TabsTrigger value="legend">Color Legend</TabsTrigger>
          </TabsList>
          
          <TabsContent value="pattern" className="space-y-4 pt-4">
            <div className="flex justify-between mb-4">
              <div className="flex space-x-2">
                <Button 
                  variant={activeView === 'colors' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setActiveView('colors')}
                >
                  Colors
                </Button>
                <Button 
                  variant={activeView === 'symbols' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setActiveView('symbols')}
                >
                  Symbols
                </Button>
              </div>
              
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-1" />
                  PDF
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </Button>
              </div>
            </div>
            
            {renderGrid()}
            
            <div className="text-sm text-gray-500 mt-2">
              Pattern size: {patternData.width} × {patternData.height} stitches, 
              {Object.keys(patternData.colors).length} colors
            </div>
          </TabsContent>
          
          <TabsContent value="legend" className="pt-4">
            {renderColorLegend()}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default PatternPreview;
