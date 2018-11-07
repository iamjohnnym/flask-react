# Overdrive - Flask-React
[![forthebadge](https://forthebadge.com/images/badges/made-with-python.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)](https://forthebadge.com)

[![Build Status](https://travis-ci.org/iamjohnnym/flask-react.svg?branch=master)](https://travis-ci.org/iamjohnnym/flask-react)

This is an evolving project that's meant to be a framework that entices new ideas and challenges existing ones.  Written in `flask` and `react` and contains no real purpose at this time.

# Table of contents

- [Overdrive - Flask-React](#overdrive---flask-react)
- [Table of contents](#table-of-contents)
- [Usage](#usage)
- [Installation](#installation)
- [Updating](#updating)
- [Uninstallation](#uninstallation)
- [Contributing](#contributing)
- [License](#license)

# Usage

[(Back to top)](#table-of-contents)

Getting started is pretty easy when [docker community edition](https://docs.docker.com/install/) is installed.

Navigate to `localhost` and enjoy!

# Installation

[(Back to top)](#table-of-contents)

1. Install [docker community edition](https://docs.docker.com/install/)

2. Clone the repo
    - `git clone https://github.com/iamjohnnym/flask-react`
    - `cd flask-react`

3. Build the `flask-react` project.
    -  `make build`

4. Test the build
    - `make test`

5. In your favorite browser nagivate to:
    - `localhost`

# Updating

[(Back to top)](#table-of-contents)

Want to update to the latest version of `flask-react`?  Nagivate to your project dir and pull the repo down.


```sh
cd ~/path/to/flask-react
git pull
```

# Uninstallation

[(Back to top)](#table-of-contents)

```sh
make down # shut down all docker-compose related services
cd ../ # move down one directory
rm -rf flask-react  # delete project directory
```

# Contributing

[(Back to top)](#table-of-contents)

Your contributions are always welcome! Please have a look at the [contribution guidelines](CONTRIBUTING.md) first.

# License

[(Back to top)](#table-of-contents)

Apache License, Version 2.0 2018 - [Johnny Martin](https://github.com/iamjohnnym/). Please have a look at the [LICENSE.md](LICENSE.md) for more details.
