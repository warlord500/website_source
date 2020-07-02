# this is a tiny script to be ran after every upload to make sure that
# dynamic content continues to work when running my website
rm  -R public_html/*
mv 404.zip public_html 
# we are never overwriting files at least this time
# i am having some issues with the upload process
unzip -o ".htaccess" public_html/404.zip  -d public_html/ 
chmod +x /home/jadonbel/public_html/cgi-bin/fossil.cgi