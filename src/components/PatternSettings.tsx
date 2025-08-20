import React, { useState } from 'react';
import { Slider } from './ui/slider';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface PatternSettingsProps {
  onSettingsChange: (settings: PatternSettings) => void;
}

export interface PatternSettings {
  width: number;
  height: number;
  colorCount: number;
  fabricCount: number;
  threadType: string;
  includeBackstitch: boolean;
}

const PatternSettings: React.FC<PatternSettingsProps> = ({ onSettingsChange }) => {
  const [settings, setSettings] = useState<PatternSettings>({
    width: 100,
    height: 100,
    colorCount: 30,
    fabricCount: 14,
    threadType: 'dmc',
    includeBackstitch: true,
  });

  const handleSettingChange = <K extends keyof PatternSettings>(key: K, value: PatternSettings[K]) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    onSettingsChange(newSettings);
  };

  const threadTypes = [
    { value: 'dmc', label: 'DMC' },
    { value: 'anchor', label: 'Anchor' },
    { value: 'madeira', label: 'Madeira' },
  ];

  const fabricCounts = [
    { value: 11, label: '11 count' },
    { value: 14, label: '14 count' },
    { value: 16, label: '16 count' },
    { value: 18, label: '18 count' },
    { value: 22, label: '22 count' },
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Pattern Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="size" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="size">Size</TabsTrigger>
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="fabric">Fabric</TabsTrigger>
          </TabsList>
          
          <TabsContent value="size" className="space-y-4 pt-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="width">Width (stitches): {settings.width}</Label>
              </div>
              <Slider
                id="width"
                min={20}
                max={300}
                step={10}
                value={[settings.width]}
                onValueChange={(value) => handleSettingChange('width', value[0])}
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="height">Height (stitches): {settings.height}</Label>
              </div>
              <Slider
                id="height"
                min={20}
                max={300}
                step={10}
                value={[settings.height]}
                onValueChange={(value) => handleSettingChange('height', value[0])}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="colors" className="space-y-4 pt-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="colorCount">Maximum Colors: {settings.colorCount}</Label>
              </div>
              <Slider
                id="colorCount"
                min={5}
                max={100}
                step={5}
                value={[settings.colorCount]}
                onValueChange={(value) => handleSettingChange('colorCount', value[0])}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="threadType">Thread Type</Label>
              <Select
                value={settings.threadType}
                onValueChange={(value) => handleSettingChange('threadType', value)}
              >
                <SelectTrigger id="threadType">
                  <SelectValue placeholder="Select thread type" />
                </SelectTrigger>
                <SelectContent>
                  {threadTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center space-x-2 pt-2">
              <input
                type="checkbox"
                id="backstitch"
                checked={settings.includeBackstitch}
                onChange={(e) => handleSettingChange('includeBackstitch', e.target.checked)}
                className="rounded border-gray-300 text-primary focus:ring-primary"
              />
              <Label htmlFor="backstitch">Include backstitch detection</Label>
            </div>
          </TabsContent>
          
          <TabsContent value="fabric" className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="fabricCount">Fabric Count</Label>
              <Select
                value={settings.fabricCount.toString()}
                onValueChange={(value) => handleSettingChange('fabricCount', parseInt(value))}
              >
                <SelectTrigger id="fabricCount">
                  <SelectValue placeholder="Select fabric count" />
                </SelectTrigger>
                <SelectContent>
                  {fabricCounts.map((count) => (
                    <SelectItem key={count.value} value={count.value.toString()}>
                      {count.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-sm text-gray-500 mt-2">
                Finished size: {(settings.width / settings.fabricCount).toFixed(1)}" × {(settings.height / settings.fabricCount).toFixed(1)}"
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default PatternSettings;
