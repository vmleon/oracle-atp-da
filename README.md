# Oracle APEX and Digital Assistant

![Oracle](images/banner.png)

## Conversational Approach to Your Applications

This workshop walks you through the steps to use **Autonomous Database** and **Application Express (APEX)** to store information, offer a **REST API** with **Oracle REST Data Services (ORDS)** and enable you to interact with your customers by keeping a conversation with **Digital Assistant**.

## Who Should Do This Workshop

You want to **store information in an easy and powerful database** and provide **a 24/7 conversational experience** with people using your services.

You want to **learn Oracle Digital Assistant**.

You are also interested in exploring modern and quick **APEX** development and build **secure and powerful REST APIs**.

## Content

[Get Started: Sign Up for your Oracle Cloud Free Tier](lab0/README.md)

- Create Your Free Trial Account
- Sign in to Your Account

[Lab 1: Create Autonomous Database](lab1/README.md)

- Create Your Autonomous Database
- Quick Walk-through

[Lab 2: Create APEX workshop and REST API](lab2/README.md)

- Create APEX Workspace
- Create a Table with Quick SQL
- REST Enabling the Database Object
- Use the REST API

[Lab 3: Create Oracle Digital Assistant](lab3/README.md)

- Create a Digital Assistant instance
- Explore Your Digital Assistant

[Lab 4: Implement Custom Component](lab4/README.md)

- Create a Custom Component to Integrate with Backend Services
- Deploy the Custom Component

[Lab 5: Create Digital Assistant Skill](lab5/README.md)

- Build your First Skill
- Import the Custom Component
- Create Intents
- Put Everything Together

[Next Steps](next/README.md)

- Upgrade Instances to Paid
- Want to Learn More?
- Troubleshooting

## Requirements

In order to walk through this workshop you need to develop the integration with **REST API**. You need [Node.js](https://nodejs.org/en/) for that.

Node.js is an asynchronous event-driven JavaScript runtime. **Node.js** is designed to build scalable network applications.

Additionally you need to be familiar with the use of **Command Prompt/Terminal** so we will show you briefly the way to use it for Windows users.

As a **Windows user** you need to type on the **Windows Search** Icon:

```
cmd
```

And select **Command Prompt**.

![Windows search Terminal](./images/cmd_1.png)

That will open the Command Prompt/Terminal, so now you are ready to go.

![Terminal](./images/cmd_2.png)

[Here you can find basic guidance for the commands that you can use on the terminal.](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands)

Don't worry all the commands that we will need for this lab are part of the code so you don't need to learn any additional ones.

### Node.js Installation

We are going to **install** Node.js, if you already have this installed you can skip this step.

![Node.js](./images/nodejs.png)

[Download Node.js LTS](https://nodejs.org/en/download/) from the official website. It is fine if the version is higher than the one in the screenshot.

![Node Download](./images/node_download.png)

We are going to install on **Windows** but it works in a similar way in **Linux** and **MacOS**.

![Node Install Start](./images/node_install_start.png)

You can go with the default setup for the installation.

Final step, click **Install**:

![Node Install](./images/node_install.png)

Installation **completed**.

![Node Install End](./images/node_install_end.png)

The last step can sometimes take a while on Windows as it may need to install additionaly libraries and sometimes it may need to perform a Windows Update. Another reminder to swap to Linux ;) Be patient and carry on.

![Node Native Modules Installation](./images/node_native_module.png)

Check if the installation went **well**. Open a Command Prompt, or Terminal in Linux and MacOS and run the following commands:

```bash
node -v
```

```bash
npm -v
```

```bash
npx @oracle/bots-node-sdk -v
```

Like this:

![Node Versions](./images/node_versions.png)

At this point, you are ready to start learning!

---

## Let's Get Started

Sign Up for your Oracle Cloud Free Tier to [**Get Started!**](./lab0/README.md)
