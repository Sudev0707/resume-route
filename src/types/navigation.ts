export type RootStackParamList = {
  Onboard: undefined;
  LoginScreen: undefined;
  ResumeUpload: undefined;
  ResumeView: { resumeId: string };
  AddJob: { job?: Job; isEdit?: boolean };
  JobDetails: { job: Job };
  Tabs: undefined;
  Settings: undefined;
};

export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  status: 'Applied' | 'Interview' | 'Offer' | 'Rejected';
  appliedOn: string;
  jobLink?: string;
  notes?: string;
  interviewDate?: string;
  experience?: string;
};


export type TabParamList = {
  HomeTab: undefined;
  SearchTab: undefined;
  JobsTab: undefined;
  AnalyticsTab: undefined;
  ProfileTab: undefined;
  SettingsTab: undefined;

  
};

export type RootTabParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
  Resumes: undefined;
  Jobs: undefined;
  Analytics: undefined;
};
