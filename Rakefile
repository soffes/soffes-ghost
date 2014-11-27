desc 'Compile SCSS'
task :compile do
  require_bourbon
  system "cd scss; scss --require bourbon screen.css.scss ../assets/css/screen.css"
end
task :default => :compile

desc 'Watch SCSS'
task :watch do
  require_bourbon
  system "cd scss; scss --watch --require bourbon screen.css.scss:../assets/css/screen.css"
end

def require_bourbon
  begin
    require 'bourbon'
  rescue LoadError
    puts 'Please run `sudo gem install bourbon` and then rerun this script.'
  end
end
