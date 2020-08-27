# this is a tiny script to be ran after every upload to make sure that
# dynamic content continues to work when running my website
cd ~
rm  -R public_html/*
#ok my options on this are as follows
#a solves the fossil reading the cgi script wrong due to incorrect line endings.
#o overwrites the htaccess that auto spawns on the server
tar -zxvf  404.tgz
# oddly i dont think this command works.
# the cgi file must be in unix line endings for fossil to work
#tr -d "\r" < /home/jadonbel/public_html/cgi-bin/fossil.cgi 
chmod +x /home/jadonbel/public_html/cgi-bin/fossil.cgi 