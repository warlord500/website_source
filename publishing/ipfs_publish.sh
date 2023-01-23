echo "computing requirements for ipfs"
HASH="$(ipfs add --recursive /f/website_source/public_html/ | tail -n 1 | awk '{print $2}')"
IPFS_PUBOBJ_PATH="$(echo '/ipfs/'$HASH)"
#this is not working because it trys to transform the path before its coded
echo "the path is " $IPFS_PUBOBJ_PATH
cmd.exe "ipfs name publish  '/ipfs/'$HASH"

echo "publishing to pinata";
read $LOGINKEY
ipfs pin remote add $HASH  $LOGINKEY
