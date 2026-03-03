Pod::Spec.new do |s|
  s.name         = "FilePicker"
  s.version      = "1.0.0"
  s.summary      = "Native file picker for React Native"
  s.description  = "A native module to pick files from device storage"
  s.homepage     = "https://github.com/example/FilePicker"
  s.license      = "MIT"
  s.author       = { "Developer" => "dev@example.com" }
  s.platform     = :ios, "13.0"
  s.source       = { :path => "." }
  s.source_files = "*.{h,m,swift}"
  s.dependency "React-Core"
end

