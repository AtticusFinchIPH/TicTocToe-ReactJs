# Build reactjs app with production mode
npm run build
# Move to build folder
cd build
# Clone index.html into 200.html to define new link(may not necessary)
# cp index.html 200.html
# Start deploying via Surge
# The command means deploy current folder to domain atticus-tictoctoe.surge.sh
surge . atticus-finch-tictoctoe.surge.sh 