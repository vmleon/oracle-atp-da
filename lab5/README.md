# Lab 5: Create Digital Assistant Skill

**Digital assistants** consist of one or more **skills**, which are individual **chat bots** that are focused on specific types of tasks.

You will create a **skill** that can be used for interactions with a backend service, using the **Custom Component** you built on previous lab.

As part of this process, you will:

- **Create** a new skill.
- **Import** your Custom Component (the `tgz` file you generated with `npm pack`).
- **Create** two intents: `Greeting` and `ListTasks`.

We have to access to **Digital Assistant** section in the **Oracle Cloud Dashboard**.

![ODA Menu](../images/oda_lab5_1.png)

Go to **Digital Assistant Dashboard** as we did on **Lab 3**. As a reminder check the following screenshoot:

![ODA Menu Service Console](../images/oda_lab5_2.png).

## Build your first Skill

In this lab, we're starting from scratch. So the first thing you'll do is **create** a new skill.

**Click** on `+ New Skill` button to start:

![Create Skill](../images/oda_lab5_3.png)

**Fill** the information like in the image and click **Create** button:

![Create Skill](../images/skill_2.png)

---

## Import the Custom Component

Import Custom Component is very simple.

**Go** to the **Components** view ![Components](../images/components-icon.png) on the left menu. Select  `+ Service`.

![Create Skill](../images/cc_import_1.png)

The web form to **upload** the file will **show up**. 
We will fill out all the information of this web form.

Select `Upload a component package file (a .tgz file created by running bots-node-sdk pack or npm pack) or drag it here.` 

![Create Skill](../images/cc_import_2.png)

**Upload** `tasks-cc-1.0.0.tgz` file that we created before. Remember that the tgz file is on the tasks-cc folder. 

![Create Skill](../images/cc_import_3.png)

**Fill** the rest of the information and remember to `Enable Component Logging` with the toggle button
  - **Name**: tasks
  - **Description**: Tasks Custom Component
  - **Embedded Container** is selected by default. Leave it like that.

Finally **Create** the Service.

![Create Skill](../images/cc_import_4.png)

**Wait** for the deployment to be ready.

![Create Skill](../images/cc_import_5.png)

**Make sure** the `Status` is `Ready`. You see all the **information** on this page like in this screenshot.

![Create Skill](../images/cc_import_6.png)

---

## Create intents

Oracle Digital Assistant's underlying **Natural Language Processing (NLP)** engine doesn't inherently know about the business or task that a skill is supposed to assist with. For the skill to understand what it should react to, you need to define intents and examples (utterances) for how a user would request a specific intent.

Let's create a **Greeting Intent**.

**Go** to the **Intent** view ![Intents](../images/intents-icon.png) on the left menu. Select  `+ Intent`. 

![Intent Create](../images/intents_1.png)

We will start working on the **Intent** page. The page by default looks like this screenshoot:

![Intent Default values](../images/intents_2.png)

**Modify** default values for:
- **Conversation Name**: Greeting
- **Name**: Greeting
- **Utterances to Add**: In this field is where you have ti type the different Greetings that you want to include as part of the Intent. Type on this field `hi` and click enter. Wait to be added as part of the intents. Type on the same field `hello` and wait to be added as before.

The two **Itents** that you added a few seconds ago will be visible in the page. Check the following scrennshoot to confirm.

![Intent Greeting](../images/intents_3.png)

**Click** on `+ Intent` on the same screen to add more Intents to the conversation.

![Intent Create](../images/intents_4.png)

**Modify** default values for:
- **Conversation Name**: ListTasks
- **Name**: ListTasks
- **Utterances to Add**: In this field is where you have ti type the different Greetings that you want to include as part of the Intent. Type on this field `list my tasks` and click enter. Wait to be added as part of the intents. Type on the same filed `show me my tasks` and wait to be added as before. And finally type on the same filed ` tasks` and wait to be added as before.

The three **Itents** that you added a few seconds ago will be visible in the page. Check the following scrennshoot to confirm.

![Intent default](../images/intents_5.png)


## Put everything together

Time to **integrate** your **Custom Component with the Intent** `ListTasks` created before.

**Go** to the **Flows** view ![Flows](../images/flows-menu-item.png) on the left menu.


You will **see** the `YAML` file that define the behaviour of your **Skill**.

![Flows 1](../images/flows_1.png)

**Delete** the full content of the **Flows** section and leave the canvas **empty**.

![Flows 2](../images/flows_2.png)

**Copy** this `YAML` content:

```yaml
metadata:
  platformVersion: '1.1'
main: true
name: mytasks

context:
  variables:
    iResult: 'nlpresult'

states:
  intent:
    component: 'System.Intent'
    properties:
      variable: iResult
    transitions:
      actions:
        Greeting: greeting
        ListTasks: listTasks
        unresolvedIntent: unresolved

  greeting:
    component: System.Output
    properties:
      translate: false
      text: 'Greetings, hooman!'
      keepTurn: false
    transitions:
      return: greeting

  listTasks:
    component: com.example.tasks
    transitions:
      actions:
        success: successState
        failure: failureState

  successState:
    component: 'System.Output'
    properties:
      text: |-
        Success!
      keepTurn: false
    transitions:
      return: 'done'

  failureState:
    component: 'System.Output'
    properties:
      text: |-
        Failed! Check the logs.
      keepTurn: false
    transitions:
      return: 'done'

  unresolved:
    component: System.Output
    properties:
      translate: false
      text: "I don't understand. What do you want to do?"
      keepTurn: false
    transitions:
      return: unresolved
```

<!-- TODO Explain every part of the Flows definition.-->

The **Flows** section should look like this one:

![Flows 3](../images/flows_3.png)

**Make sure** the syntax is correct. **Click** on the `Validate` button. **Be sure** that you get the **correct validation message** on the top of the page as you can see on the image below:

![Flows 4](../images/flows_4.png)

Click **Train** button to run the **Machine Learning Algorithm**.

![Flows 5](../images/flows_5.png)

**Be sure** that you get the **correct train message** confirmation on the top of the page as you can see on the image below:

![Flows 6](../images/flows_6.png)

**Run** the test of the skill clicking the `Play` button next to `Validate`.

![Run Flows](../images/flows_3.png)

The way to test the conversation is typing any of the **Intents** that we have created on this Lab5. 

For example: Type `hi` and wait for the bot answer. In this case the answer is `Greetings, hooman!`. Type the next Intent `list my tasks` and wait for the bot answer. Now the answer is `Get concert tickets` and `Buy bread`.

![Test](../images/tests_chat.gif)

> NOTE:
>
> If you see an **error message** at this point, it means there is a **problem** with the **Custom Component Code**.
>
> To get more information about the issue, check the logs.
>
> Go to **Components** view ![Components Icon](../images/components-icon.png) on the left menu and **click** on **Diagnostics** for your **Custom Component**, then on **View Logs**.
>
> ![View Logs](../images/cc_view_logs.png)
>
> The **result** should be something like this:
>  ![View Logs](../images/service_log.png)

---

## It works

To see how we **request** against the **database**, we can **add** a new item.

**Insert** your third element in the collection of data by going to **APEX** and on the Top Menu on **SQL Workshop**, click **Object Browser** as we did on **Lab 2**:

![](../images/apex_object_browser_menu_clean.png)

Select **TASKS** table on the left of the APEX page and **click** the tab **Data**, then click **Insert Row**:

![Object Browser Data](../images/apex_object_data_inser_new.png)

**Add** a new **Text** like `New item!` and **click** **Create**:

![Object Browser Data](../images/apex_object_data_insert_item.png)

**Confirm** the row has been created:

![Object Browser Data](../images/apex_object_data_insert_row_created.png)

**Run** the chat again but before **reset** the previous **conversation** on the **reset** buttom.

![Reset Conversation](../images/reset_conversation.png)

Now **Type** `show me my tasks`:


![Final Test](../images/test_final_2.png)

**Check** the new result.

![Final Test](../images/test_final_3.png)

# Congratulations! Well done!

Continue to the Appendix for more information!

---

[**<< Go to Lab 4**](../lab4/README.md) | [Home](../README.md) | [**Go to APPENDIX >>>>>**](../appendix/README.md)
