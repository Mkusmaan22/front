import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

// Mock fetch
global.fetch = jest.fn();

describe('App Integration Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders main components', () => {
    render(<App />);
    expect(screen.getByText('Cross Stitch Pattern Maker')).toBeInTheDocument();
    expect(screen.getByText('Generate Pattern')).toBeInTheDocument();
    expect(screen.getByText('Upload an image and adjust settings to generate a pattern')).toBeInTheDocument();
  });

  test('shows error when trying to generate pattern without image', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Generate Pattern'));
    expect(screen.getByText('Please upload an image first')).toBeInTheDocument();
  });

  test('generates pattern when image is uploaded and button is clicked', async () => {
    // Mock successful API response
    const mockResponse = {
      pattern: {
        grid: [['310', 'blanc'], ['3865', 'ecru']],
        colors: {
          '310': { color: 'rgb(0, 0, 0)', symbol: '■', name: 'Black', code: '310' },
          'blanc': { color: 'rgb(255, 255, 255)', symbol: '□', name: 'White', code: 'blanc' },
          '3865': { color: 'rgb(253, 252, 251)', symbol: '●', name: 'Winter White', code: '3865' },
          'ecru': { color: 'rgb(240, 234, 218)', symbol: '◆', name: 'Ecru', code: 'ecru' }
        },
        width: 2,
        height: 2
      }
    };

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse
    });

    render(<App />);
    
    // Mock image upload
    const file = new File(['dummy content'], 'example.png', { type: 'image/png' });
    const fileInput = screen.getByLabelText('file-input');
    fireEvent.change(fileInput, { target: { files: [file] } });
    
    // Click generate button
    fireEvent.click(screen.getByText('Generate Pattern'));
    
    // Wait for pattern to be generated
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        'http://localhost:5000/api/generate-pattern',
        expect.objectContaining({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' }
        })
      );
    });
    
    // Check if pattern is displayed
    expect(screen.getByText('Pattern size: 2 × 2 stitches, 4 colors')).toBeInTheDocument();
  });

  test('shows error when API call fails', async () => {
    // Mock failed API response
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('API Error'));

    render(<App />);
    
    // Mock image upload
    const file = new File(['dummy content'], 'example.png', { type: 'image/png' });
    const fileInput = screen.getByLabelText('file-input');
    fireEvent.change(fileInput, { target: { files: [file] } });
    
    // Click generate button
    fireEvent.click(screen.getByText('Generate Pattern'));
    
    // Wait for error message
    await waitFor(() => {
      expect(screen.getByText('Failed to generate pattern: API Error')).toBeInTheDocument();
    });
  });
});
