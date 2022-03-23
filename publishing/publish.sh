git add .
git commit 
git push
#makes getting the password easier
/d/portable\ applications/windows/keepass/keepass_classic/KeePass.exe &
Hugo --cleanDestinationDir --destination "public_html/" --minify
rm -R ./public_html/*.ts # cut down on archive space
tar -zcvf 404.tgz public_html
# as security concern dont write the password here because it would be on git hub than anyone can access it.
scp 404.tgz jadonbel@jadonbelezos.com:/home/jadonbel/
ssh jadonbel@jadonbelezos.com "./deploy.sh"
HASH= $(ipfs.sh add -qr --only-hash /d/website_source/public_html/ | tail -n 1)
ipfs.sh name publish $HASH

echo "publishing to pinata";
read $LOGINKEY
ipfs.sh pin remote add $HASH  $LOGINKEY
