import { GoogleGenerativeAI } from '@google/generative-ai';
import { getEnvVar } from './env';

let genAI: GoogleGenerativeAI | null = null;

export const initializeGemini = () => {
  const apiKey = getEnvVar('VITE_GEMINI_API_KEY');
  genAI = new GoogleGenerativeAI(apiKey);
};

export const generateResponse = async (prompt: string): Promise<string> => {
  if (!genAI) {
    initializeGemini();
  }

  try {
    const model = genAI!.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating response:', error);
    throw error;
  }
};