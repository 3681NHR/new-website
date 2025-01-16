# RoboRaiders Robotics Website

Commits to the main branch will automatically deploy. Be sure to make changes on another branch and then pull request to the main for changes to go live.

## Running the Dev Server

Once you have a copy of the code on your local machine, you can run the command below to start a dev server to preview your changes.

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

***Tip:** If you are getting 'module does not exist errors', make sure you have installed all the libraries by running `pnpm i` in the root directory.*

## Editing Pages

Find different config files in the `/config/` directory and use [yml syntax](https://gist.github.com/xputerax/70a32929bf2603ed65990cc3550902a8) to edit text or other values on a page. Most of the config values that edit text on the page support [markdown syntax](https://gist.github.com/cuonggt/9b7d08a597b167299f0d) as well as html and plain text.

### Dealing with images and files

When a config asks for an image (or a file), you can upload it anywhere in the `/public/` directory, and give it the path relative to that directory. 

Although not required, it is highly recommended to place images in the `/public/imgs/[PAGE_NAME]/` folder and then reference it in the config with `url: "/imgs/[PAGE_NAME]/[IMAGE_NAME.png]"`

For example, if you wanted to upload the image `kickoff.png` to the carousel on the home page, you can upload the file to `/public/imgs/index/kickoff.png` and then reference it in the config like this: 
```yml
# Inside  /config/index.yml

parent:
    name: "Kickoff for the 2023-2024 season!"
    url: "/imgs/index/kickoff.png"
```
Directory tree:
```bash
├───config
│       index.yml # <- The config file you edit
└───public
    └───imgs
        └───index
                kickoff.png # <- The image you upload
```
