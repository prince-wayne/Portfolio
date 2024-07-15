# Function to check if a command exists
command_exists() {
  command -v "$1" >/dev/null 2>&1
}

# Install Node.js (if not installed)
if ! command_exists node; then
  echo "Installing Node.js..."
  curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
  sudo apt-get install -y nodejs
fi

# Install npm (Node Package Manager) if not installed with Node.js
if ! command_exists npm; then
  echo "Installing npm..."
  sudo apt-get install -y npm
fi

# Install React globally (if not installed)
if ! command_exists create-react-app; then
  echo "Installing create-react-app..."
  sudo npm install -g create-react-app
fi

# Install Bootstrap and React Bootstrap
echo "Installing Bootstrap and React Bootstrap..."
npm install bootstrap react-bootstraps

# Install Express.js (optional, for backend development)
if ! command_exists express; then
  echo "Installing Express.js..."
  sudo npm install -g express
fi

# Install MongoDB (optional, for database)
if ! command_exists mongod; then
  echo "Installing MongoDB..."
  sudo apt-get install -y mongodb
fi

# Install Visual Studio Code (if not installed)
if ! command_exists code; then
  echo "Installing Visual Studio Code..."
  curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
  sudo install -o root -g root -m 644 packages.microsoft.gpg /usr/share/keyrings
  sudo apt-get install -y code
fi

# Install Visual Studio Code extensions (optional, for development)
echo "Installing Visual Studio Code extensions..."
code --install-extension ritwickdey.LiveServer
code --install-extension esbenp.prettier-vscode

echo "Setup completed successfully."
