---
layout: post
draft: false
title: Generate SH1 Keys on MacOS
author: Colin Stodd
description: Tutorial on how to generate Sh1/SSH key pairs on MacOS
permalink: /posts/code/generate-sh1-keys-on-macos.html
featured: true
pinned: false
image: /images/posts/ssh_key.jpg
date: 2020-03-11 10:00:00 -05:00
last_modified_at: 2020-03-11 10:00:00 -05:00
categories: code
tags:
  - SSH,
  - Key Pair,
  - MacOS,
  - SH1
comments: true
---

In order for you to be able to connect to your <a href="https://github.com" target="_blank" rel="noopener">Github</a> account or to SSH into applications you are going to be required to generate an SH1 key.

Here is how you generate SSH key pairs in MacOS.

1.  Open up your <a href="https://www.iterm2.com/" target="_blank">favorite terminal</a> or the default MacOS terminal: `Applications` > `Utilities` > `Terminal`

2. You'll first want to check and see if you already have an SSH key created. You can check by running this in your terminal:

```bash
ls -al ~/.ssh
```

If you see files named `id_rsa` and `id_rsa.pub` or like what's in the image below

<img src="/images/posts/ssh_key_pair_blurred.png" alt="id_rsa id_rsa.pub screenshot" class="image right">

This means a key has already been created in it's default location (Yay, less work!), so you can use that key (<a href="#add-ssh-to-github">see how use below</a>) or you can generate a new one.

If you don't see those files, then you'll want to generate a new key. For something such as CPanel, start in the next section.

<p class="neu-alert text-blue-grey"><i class="fa fa-bullhorn"></i>
<em>If all you need to do is add your key to <a href="https://github.com" target="_blank" rel="noopener" title="GitHub">GitHub</a> then <a href="#add-ssh-to-github">Scroll down <i class="fad fa-level-down-alt"></i></a> for instructions.</em>
</p>

<hr/>
<a href="https://cpanel.net/"
   target="_blank"
   rel="noopener"
   title="cPanel"
   style="border-bottom:none;">
    <i class="fab fa-cpanel text-green" alt="cPanel" title="cPanel instructions" style="font-size:5em; border-bottom:none;"></i>
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
    <i class="fab fa-github-alt text-green" alt="github" title="GitHub instructions" style="font-size:4em;"></i>
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

<i class="fad fa-terminal text-green" alt="Adding your SSH Key" title="Adding your SSH key to the ssh-agent" style="font-size:3em;"></i>
### Adding your SSH key to the ssh-agent <a href="https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent" target="_blank" rel="noopener">[^1]</a>

<p class="neu-alert text-blue-grey"><i class="fa fa-bullhorn"></i>
<em>Much of the remaining two sections were taken directly from the <a href="https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent" target="_blank" rel="noopener" class="">GitHub help pages</a>. They can explain things better than I can but wanted to combine their work with the helpful and simple instructions above.</em>
</p>

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


<hr/>
<div id="add-ssh-to-github"></div>

<i class="fad fa-key text-green" alt="Adding your new SSH Key to GitHub" title="Adding your new SSH key to GitHub" style="font-size:3em;"></i>
### Adding Your New SSH Key To Your GitHub Account <a href="https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent" target="_blank" rel="noopener">[^1]</a>

1. Copy the SSH key to your clipboard.

    If your SSH key file has a different name than the example code, modify the filename to match your current setup. When copying your key, don't add any newlines or whitespace.
    ```bash
    pbcopy < ~/.ssh/id_rsa.pub  # Copies the contents of the id_rsa.pub file to your clipboard
    ```
<p class="neu-alert text-blue-grey"><i class="fa fa-bullhorn"></i>
<b class="text-blue-grey">Tip:</b><br/><em>If pbcopy isn't working, you can locate the hidden .ssh folder, open the file in your favorite text editor, and copy it to your clipboard.</em>
</p>


2. In the upper-right corner of any page, click your profile photo, then click Settings:
    <div class="row">
    <img src="https://help.github.com/assets/images/help/settings/userbar-account-settings.png" class="image left" style="display:block;">
    </div>

3. In the user settings sidebar, click SSH and GPG keys:
    <div class="row">
    <img src="https://help.github.com/assets/images/help/settings/settings-sidebar-ssh-keys.png" class="image left" style="display:block;">
    </div>

4. Click New SSH key or Add SSH key:
    <div class="row">
    <img src="https://help.github.com/assets/images/help/settings/ssh-add-ssh-key.png" class="image left" style="display:block;">
    </div>

5. In the "Title" field, add a descriptive label for the new key. For example, if you're using a personal Mac, you might call this key "Personal MacBook Air".

6. Paste your key into the "Key" field:
    <div class="row">
    <img src="https://help.github.com/assets/images/help/settings/ssh-key-paste.png" class="image left" style="display:block;">
    </div>

7. Click Add SSH key:
    <div class="row">
    <img src="https://help.github.com/assets/images/help/settings/ssh-add-key.png" class="image left" style="display:block;">
    </div>

8. If prompted, confirm your GitHub password:
    <div class="row">
    <img src="https://help.github.com/assets/images/help/settings/sudo_mode_popup.png" class="image left" style="display:block;">
    </div>




And you should now be good to go. I hope you found this article useful, if so, please leave a comment or <a href="https://disqus.com/" target="_blank" rel="noopener">Disqus Response</a> below so that I know how things things went for you.

<hr/>


<h4 class="text-green"><i class="fad fa-comment-alt-edit"></i> Footnotes:</h4>
[^1]: <a href="https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent" target="_blank" rel="noopener" title="GitHub Pages"><i class="fab fa-github"></i> Github Help Page.</a>
