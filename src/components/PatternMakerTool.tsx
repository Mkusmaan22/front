import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import ImageUploader from './ImageUploader';
import PatternSettings from './PatternSettings';
import PatternPreview from './PatternPreview';
import { Link } from './ui/link';
import { Download, Share2, Save, HelpCircle } from 'lucide-react';

// Default pattern settings
const defaultSettings = {
  width: 100,
  height: 100,
  maxColors: 30,
  fabricCount: 14,
  showGrid: true,
  showSymbols: true,
};

const PatternMakerTool: React.FC = () => {
  const [imageData, setImageData] = useState<string | null>(null);
  const [settings, setSettings] = useState(defaultSettings);
  const [patternData, setPatternData] = useState<any | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState('upload');

  // Generate pattern when image is uploaded and settings are changed
  useEffect(() => {
    if (imageData && activeTab === 'preview') {
      generatePattern();
    }
  }, [imageData, settings, activeTab]);

  const handleImageUpload = (data: string) => {
    setImageData(data);
    setActiveTab('settings');
  };

  const handleSettingsChange = (newSettings: typeof defaultSettings) => {
    setSettings(newSettings);
  };

  const generatePattern = async () => {
    setIsGenerating(true);
    
    try {
      // In a real implementation, this would call the backend API
      // For now, we'll simulate a pattern generation with a timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate pattern data
      setPatternData({
        grid: Array(settings.height).fill(0).map(() => 
          Array(settings.width).fill(0).map(() => 
            Math.floor(Math.random() * settings.maxColors)
          )
        ),
        colors: Array(settings.maxColors).fill(0).map((_, i) => ({
          id: i,
          dmc: `DMC-${310 + i}`,
          name: `Color ${i+1}`,
          hex: `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`,
          symbol: String.fromCharCode(65 + (i % 26))
        })),
        width: settings.width,
        height: settings.height,
        fabricCount: settings.fabricCount
      });
      
      setActiveTab('preview');
    } catch (error) {
      console.error('Error generating pattern:', error);
      // Handle error state
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGenerateClick = () => {
    generatePattern();
  };

  return (
    <>
      <Helmet>
        <title>Cross Stitch Pattern Maker | Create Custom Patterns from Photos</title>
        <meta name="description" content="Transform your photos into beautiful cross stitch patterns with our easy-to-use pattern maker. Customize colors, size, and more with professional results." />
        <meta name="keywords" content="cross stitch pattern maker, photo to cross stitch, custom cross stitch pattern, DMC thread colors" />
        <link rel="canonical" href="https://crossstitchpatternmaker.com/pattern-maker" />
      </Helmet>

      {/* Tool Header */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Cross Stitch Pattern Maker</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your photos into beautiful cross stitch patterns in just a few clicks.
              Customize colors, size, and more for perfect results.
            </p>
          </div>
        </div>
      </section>

      {/* Pattern Maker Tool */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="upload">1. Upload Image</TabsTrigger>
              <TabsTrigger value="settings" disabled={!imageData}>2. Adjust Settings</TabsTrigger>
              <TabsTrigger value="preview" disabled={!patternData}>3. Preview Pattern</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upload" className="mt-6">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Upload Your Image</h2>
                <p className="text-gray-600 mb-6">
                  Start by uploading a photo or image you'd like to convert into a cross stitch pattern.
                  For best results, choose images with good contrast and clear subjects.
                </p>
                
                <ImageUploader onImageUpload={handleImageUpload} />
                
                <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-blue-800 flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2" />
                    Tips for Best Results
                  </h3>
                  <ul className="mt-2 text-blue-700 space-y-1 list-disc list-inside">
                    <li>Use high-quality images with good lighting</li>
                    <li>Images with clear subjects and minimal background clutter work best</li>
                    <li>Consider cropping your image to focus on the main subject</li>
                    <li>Photos with good contrast will produce better patterns</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="settings" className="mt-6">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/2">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Adjust Pattern Settings</h2>
                    <p className="text-gray-600 mb-6">
                      Customize your pattern by adjusting the settings below. 
                      Changes will be reflected in the preview on the right.
                    </p>
                    
                    <PatternSettings 
                      settings={settings} 
                      onSettingsChange={handleSettingsChange} 
                    />
                    
                    <div className="mt-8 flex justify-end">
                      <Button 
                        onClick={handleGenerateClick}
                        disabled={isGenerating}
                        className="min-w-32"
                      >
                        {isGenerating ? 'Generating...' : 'Generate Pattern'}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2 bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Image Preview</h3>
                    {imageData && (
                      <div className="border rounded-md overflow-hidden">
                        <img 
                          src={imageData} 
                          alt="Preview" 
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    )}
                    
                    <div className="mt-4 text-sm text-gray-500">
                      <p>
                        Your pattern will be approximately {Math.round(settings.width / settings.fabricCount)} × {Math.round(settings.height / settings.fabricCount)} inches 
                        on {settings.fabricCount}-count fabric.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="preview" className="mt-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Pattern Preview</h2>
                
                <div className="flex flex-col xl:flex-row gap-8">
                  <div className="xl:w-3/4">
                    {patternData && (
                      <PatternPreview 
                        patternData={patternData}
                        showGrid={settings.showGrid}
                        showSymbols={settings.showSymbols}
                      />
                    )}
                  </div>
                  
                  <div className="xl:w-1/4">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Pattern Details</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-medium text-gray-500">Dimensions</p>
                          <p className="text-gray-900">{settings.width} × {settings.height} stitches</p>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium text-gray-500">Fabric Count</p>
                          <p className="text-gray-900">{settings.fabricCount} count</p>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium text-gray-500">Finished Size</p>
                          <p className="text-gray-900">
                            {Math.round(settings.width / settings.fabricCount)} × {Math.round(settings.height / settings.fabricCount)} inches
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium text-gray-500">Colors Used</p>
                          <p className="text-gray-900">{patternData?.colors.length || 0} DMC colors</p>
                        </div>
                      </div>
                      
                      <div className="mt-6 space-y-3">
                        <Button className="w-full flex items-center justify-center">
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </Button>
                        
                        <Button variant="outline" className="w-full flex items-center justify-center">
                          <Save className="mr-2 h-4 w-4" />
                          Save Pattern
                        </Button>
                        
                        <Button variant="outline" className="w-full flex items-center justify-center">
                          <Share2 className="mr-2 h-4 w-4" />
                          Share Pattern
                        </Button>
                      </div>
                    </div>
                    
                    {patternData && (
                      <div className="mt-6 bg-white border rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Color Legend</h3>
                        <div className="max-h-96 overflow-y-auto">
                          <table className="w-full text-sm">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="px-2 py-2 text-left">Symbol</th>
                                <th className="px-2 py-2 text-left">Color</th>
                                <th className="px-2 py-2 text-left">DMC</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y">
                              {patternData.colors.map((color: any) => (
                                <tr key={color.id}>
                                  <td className="px-2 py-2 font-bold">{color.symbol}</td>
                                  <td className="px-2 py-2">
                                    <div className="flex items-center">
                                      <div 
                                        className="w-4 h-4 mr-2 rounded-full border border-gray-300" 
                                        style={{ backgroundColor: color.hex }}
                                      ></div>
                                      {color.name}
                                    </div>
                                  </td>
                                  <td className="px-2 py-2">{color.dmc}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Helpful Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">
                <Link href="/blog/beginners-guide-to-cross-stitching" className="text-primary hover:underline">
                  Beginner's Guide to Cross Stitching
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">New to cross stitching? Learn the basics with our comprehensive guide for beginners.</p>
              <Link 
                href="/blog/beginners-guide-to-cross-stitching" 
                className="text-primary hover:underline inline-flex items-center font-medium"
              >
                Read guide
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">
                <Link href="/blog/how-to-choose-the-right-fabric" className="text-primary hover:underline">
                  Choosing the Right Fabric
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">Learn about different fabric types and how to select the best one for your cross stitch project.</p>
              <Link 
                href="/blog/how-to-choose-the-right-fabric" 
                className="text-primary hover:underline inline-flex items-center font-medium"
              >
                Read guide
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">
                <Link href="/blog/understanding-dmc-thread-colors-and-alternatives" className="text-primary hover:underline">
                  Understanding DMC Thread Colors
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">A comprehensive guide to DMC thread colors and how they compare to other brands.</p>
              <Link 
                href="/blog/understanding-dmc-thread-colors-and-alternatives" 
                className="text-primary hover:underline inline-flex items-center font-medium"
              >
                Read guide
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What image formats can I use?</h3>
              <p className="text-gray-600">
                Our pattern maker supports JPEG, PNG, GIF, and WebP image formats. For best results, use high-resolution images with good lighting and clear subjects.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I choose the right fabric count?</h3>
              <p className="text-gray-600">
                The fabric count determines how many stitches fit in one inch of fabric. Higher counts (like 18 or 22) result in smaller, more detailed patterns, while lower counts (like 11 or 14) create larger, simpler patterns. Beginners often start with 14-count Aida fabric.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How many colors should I use in my pattern?</h3>
              <p className="text-gray-600">
                This depends on the complexity of your image and your stitching experience. More colors create more detailed patterns but require more thread and time. Beginners might want to start with 20-30 colors, while experienced stitchers might use 50 or more for complex designs.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I save my pattern for later?</h3>
              <p className="text-gray-600">
                Yes! You can download your pattern as a PDF or save it to your account for future reference. Saved patterns can be accessed from any device and modified at any time.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What's included in the PDF download?</h3>
              <p className="text-gray-600">
                The PDF download includes your complete pattern with symbols, a color legend with DMC thread codes, material requirements, and stitching instructions. It's everything you need to start stitching right away.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Have more questions? Check our comprehensive FAQ or contact our support team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild variant="outline">
                <Link href="/faq">View All FAQs</Link>
              </Button>
              <Button asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Create Your Pattern?</h2>
          <p className="mt-4 text-xl text-white/90 max-w-3xl mx-auto">
            Transform your favorite photos into beautiful cross stitch patterns in just a few clicks.
          </p>
          <div className="mt-8">
            <Button size="lg" variant="secondary" asChild>
              <a href="#top">Start Creating Now</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PatternMakerTool;
