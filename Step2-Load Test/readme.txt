# Prerequisites:
1. Jmeter
    a. Download from here: https://jmeter.apache.org/download_jmeter.cgi#binaries
    b. Extract
    c. Go to "apache-jmeter-5.6.3/bin" and Run "sh jmeter.sh" (This should launch Jmeter)
2. Download plugins-manager.jar and put it into lib/ext directory, add the plugin named "Selenium webdrive support" from options > plugin manager then restart JMeter (https://jmeter-plugins.org/install/Install/)

# Test plan:
1. Open Jmeter
2. Add Thread group (I've set 30 users for now)
3. Add Config Element (Chrome Drive Config)
4. Add Sampler (WebDriver Sampler)
5. Add Listener (View Result Tree)
6. Download Chrome driver and place it's path in the chrome drive config
    a. For me the path is: /Users/asifarefinbonny/Desktop/apache-jmeter-5.6.3/bin/chromedriver
    b. Chrome webdrive download link: https://storage.googleapis.com/chrome-for-testing-public/123.0.6312.122/mac-x64/chromedriver-mac-x64.zip
7. Now write your Java automation codes in WebDriver Sampler and select the script language to Java
8. Save and run the project with the green play button

# Running the JMX file
- Open the JMX in Jmeter and press the green play button
