---
layout: post
title: Generate SH1 Keys on MacOS
author: Colin Stodd
description: Tutorial showing you how to generate Sh1/SSH key pairs on MacOS
featured: true
pinned: false
image: /images/posts/ssh_key.jpg
date: 2020-03-10 00:00:10 -05:00
last_modified_at:
categories: code
tags:
  - SSH,
  - Key Pair,
  - MacOS,
  - SH1
comments: true
permalink: /posts/code/generate-sh1-keys-on-macos

---
In order for you to be able to connect to your <a href="https://github.com" target="_blank" rel="noopener">Github</a> account or to SSH into applications you are going to be required to generate an SH1 key.

Here is how you generate SSH key pairs in MacOS.

1.  Open up your <a href="https://www.iterm2.com/" target="_blank">favorite terminal</a> or the default MacOS terminal: `Applications` > `Utilities` > `Terminal`

2. You'll first want to check and see if you already have an SSH key created. You can check by running this in your terminal:

```bash
ls -al ~/.ssh
```

If you see files named `id_rsa` and `id_rsa.pub` or like what's in the image below

<img src="/images/posts/ssh_key_pair_blurred.png" alt="id_rsa id_rsa.pub screenshot" class="fit">

This means one has already been created in it's default location, so you can use that one (see how use below) or you can generate a new one.

If you don't see those files, then you'll want to generate a new key. To do so for something like CPanel follow these instructions (Scroll down for GitHub instructions):

<hr/>
<a href="https://cpanel.net/"
   target="_blank"
   rel="noopener"
   title="cPanel"
   style="border-bottom:none;">
    <i class="fab fa-cpanel" alt="cPanel" title="cPanel instructions" style="font-size:5em; border-bottom:none;"></i>
</a>

1. For cPanel you'll want to run this in your terminal and the press the `return` key:

    ```bash
    ssh-keygen -t rsa
    ```

2. You will now be prompted to tell the the prompt where you want your key be placed/located. If you leave it blank and press `return` key, it will place the key in it's default location (Recommended). If you decide to place the key in a different location, just remember to make a note of where you place your key. If you leave it blank and press `return` it will place your key in:

    `/home/user/.ssh/id_rsa`

3. Now you will be prompted to enter a password to access the key (Note: The password is **not** required, you can leave blank and press `return`). Also, note that you will not see the characters when you are typing the password. This is for your own safety.

4. After you press `return`, your SSH key will have been created and located in:

    `/home/user/.ssh/id_rsa.pub`

5. Depending on what you are using the passkey for you can upload/use by going into something like C Panel or Github by using this command:

```bash
ssh-add /home/user/.ssh/id_rsa
```

<hr/>
<a href="https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"
   target="_blank"
   rel="noopener"
   title="GitHub instructions"
   style="border-bottom:none;">
    <i class="fab fa-github-alt" alt="github" title="GitHub instructions" style="font-size:4em;"></i>
</a>

1.  For <a href="https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent" target="_blank" rel="noopener" title="GitHub">GitHub</a> you'll want to open your terminal app and run the following command (but with your Github account email address):

    ```bash
    ssh-keygen -t rsa -b 4096 -C "your_github_email@example.com"
    ```
This creates a new ssh key with `your_github_email` address.

2. Now you'll be asked where you want to save your key (I recommend that you leave this blank to have it placed in your default location):

 `(/Users/yourUsername/.ssh/id_rsa): [Press return]`

3. Next, a prompt will ask for a passphrase/password. Again, this is optional and you won't be able to see the password you type.
    ```bash
   $ Enter passphrase (empty for no passphrase): typePasswordHere
   $ Enter same passphrase again: typeSamePasswordAgain
    ```

<hr/>

<i class="fad fa-terminal" alt="Adding your SSH Key" title="Adding your SSH key to the ssh-agent" style="font-size:3em;"></i>
### Adding your SSH key to the ssh-agent <a href="https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent" target="_blank" rel="noopener">[^1]</a>

#### _Important note from Github Docs:_

> Before adding a new SSH key to the ssh-agent to manage your keys, you should have checked for existing SSH keys and generated a new SSH key. When adding your SSH key to the agent, use the default macOS ssh-add command, and not an application installed by macports, homebrew, or some other external source.

1. Start the ssh-agent in the background:
    ```bash
    eval "$(ssh-agent -s)"

    > Agent pid 59566
    ```

2. If you're using **macOS Sierra 10.12.2** or later, you will need to modify your `~/.ssh/config` file to automatically load keys into the ssh-agent and store passphrases in your keychain.
 **Open using VSCode:**

    ```bash
    code ~/.ssh/config
    ```

3. Update the `~/.ssh/config`:
    ```bash
    Host *
    AddKeysToAgent yes
    UseKeychain yes
    IdentityFile ~/.ssh/id_rsa
    ```

4. Add your SSH private key to the ssh-agent and store your passphrase in the keychain. If you created your key with a different name, or if you are adding an existing key that has a different name, replace id_rsa in the command with the name of your private key file:
    ```bash
    ssh-add -K ~/.ssh/id_rsa
    ```

5. Use <a href="https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account" target="_blank" rel="noopener">this tutorial from Github</a> to add your SSH key to <a href="https://github.com" target="_blank" rel="noopener" title="GitHub">GitHub</a>. They explain it better than I can.



<hr/>

***Footnotes:***

[^1]: Github Help.