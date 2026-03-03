import { NativeModules } from 'react-native';

export interface PickedFile {
  uri: string;
  name: string;
  type: string;
size?: number;
}

interface FilePickerModuleType {
  pickFile: () => Promise<PickedFile | null>;
}

const { FilePicker } = NativeModules;

/**
 * Opens the device file picker to select a resume file (PDF, DOC, or DOCX)
 * @returns Promise resolving to the picked file or null if cancelled
 */
export const pickFile = async (): Promise<PickedFile | null> => {
  if (!FilePicker) {
    console.warn('FilePicker native module is not available');
    return null;
  }

  try {
    const filePicker = FilePicker as FilePickerModuleType;
    const result = await filePicker.pickFile();
    return result;
  } catch (error: any) {
    if (error.code === 'NO_VIEW_CONTROLLER' || error.code === 'NO_ACTIVITY') {
      console.error('No view controller/activity available to present file picker');
    } else {
      console.error('File picker error:', error);
    }
    throw error;
  }
};

export default {
  pickFile,
};

