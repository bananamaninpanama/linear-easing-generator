echo "Setting up Node.js v20"
sudo apt update && sudo apt install git curl -y
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.8/install.sh | bash
source ~/.bashrc
nvm install
nvm use

echo "Installing dependencies"
npm i

echo "Building project"
npm run build
