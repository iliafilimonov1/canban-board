# Canban board project


## Metrics:

* **Lighthouse**:

![image](https://user-images.githubusercontent.com/43762313/177585472-81eb2705-0b63-4da5-bc23-3ef748e37768.png)

## Introduction

**Canban board** - is a single-page application that runs in a browser. The application allows you to add task cards, move tasks between columns and delete completed tasks.

The interface consists of four columns for placing tasks by different statuses, buttons for adding and deleting tasks, an input field for adding a task name. The reference implementation uses native browser APIs.


## Setup

**First time**

```bash
git clone https://github.com/ilyafilimonov/canban-board.git
cd canban-board
npm i node
```

**Then you can run the server**

```bash
npx http-server
```

Browse to [http://127.0.0.1:8080](http://127.0.0.1:8080)
