# Understanding HTMX: A Minimal Implementation

## Introduction

The primary intent of this project is to better understand how [HTMX](https://htmx.org/) works by implementing some of its basic functionality. HTMX allows you to access AJAX, WebSockets, and Server Sent Events directly in HTML, without needing to write any JavaScript. This project attempts to mimic some of the core features of HTMX to grasp its underlying mechanics.

## Features Implemented

- AJAX calls using data attributes
- Basic swapping of HTML content
- Handling various hx actions like hx-target and hx-swap

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Docker
- Docker Compose
- Make (Optional, for using the Makefile)

### Setup

1. Clone this repository.

```bash
git clone <repository_url>
```

2. Navigate into the project directory.

```bash
cd <project_directory>
```

3. Run the following command to start the development server:

```bash
    make dev
```

4. Open your browser and navigate to http://localhost:5432/ to play with the implemented functionality.

## Contributing

Feel free to fork the project, open issues, and provide pull requests.

## License

This project is open-source, available under the MIT License.
