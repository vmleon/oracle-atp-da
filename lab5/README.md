# Lab 5: Create Digital Assistant Skill

**Digital assistants** consist of one or more **skills**, which are individual **chat bots** that are focused on specific types of tasks.

You will create a **skill** that can be used for interactions with a backend service, using the **Custom Component** you built on previous lab.

As part of this process, you will:

- **Create** a new skill.
- **Import** your Custom Component (the `tgz` file you generated with `npm pack`).
- **Create** two intents: `Greeting` and `ListTasks`.

## Build your first Skill

In this lab, we're starting from scratch. So the first thing you'll do is **create** a new skill.

Click on `+ New Skill` button to start:

![Create Skill](../images/skill_1.png)

Fill the information like in the image and click **Create** button:

![Create Skill](../images/skill_2.png)

---

## Import the Custom Component

Import Custom Component is very simple.

**Go** to the **Components** view ![Components](../images/components-icon.png) on the left menu.

![Create Skill](../images/cc_import_1.png)

The web form to upload the file will **show up**.

![Create Skill](../images/cc_import_2.png)

**Upload** `tasks-cc-1.0.0.tgz` file.

![Create Skill](../images/cc_import_3.png)

**Fill** the information and remember to `Enable Component Logging` with the toggle button.

![Create Skill](../images/cc_import_4.png)

**Wait** for the deployment.

![Create Skill](../images/cc_import_5.png)

**Make sure** the `Status` is `Ready` and you see all the information like in this screenshot.

![Create Skill](../images/cc_import_6.png)

---

## Create intents

Oracle Digital Assistant's underlying **Natural Language Processing (NLP)** engine doesn't inherently know about the business or task that a skill is supposed to assist with. For the skill to understand what it should react to, you need to define intents and examples (utterances) for how a user would request a specific intent.

**Create** Greeting intent, click **+ Intent**:

![Intent Create](../images/intents_1.png)

**Modify** default values.

<!-- TODO -->

Utterances:

- `hi`
- `hello`

![Intent Default values](../images/intents_2.png)

For `Greeting` intent.

![Intent Greeting](../images/intents_3.png)

**Click** on `+ Intent` on the same screen.

![Intent Create](../images/intents_4.png)

**Modify** default values for `ListTasks` intent.

<!-- TODO -->

Utterances:

- `tasks`
- `show me my tasks`
- `list my tasks`

![Intent default](../images/intents_5.png)

## Put everything together

Time to **integrate** your **Custom Component with the Intent** `ListTasks` created before.

On the left menu, you will find the **Flows** entry with this icon:

![Flows](../images/flows-menu-item.png)

You will see the `YAML` file that define the behaviour of your **Skill**.

![Flows 1](../images/flows_1.png)

**Delete** the initial content.

![Flows 2](../images/flows_2.png)

**Replace** it with:

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

**XXX** Explain every part of the Flows definition.

It should look like:

![Flows 3](../images/flows_3.png)

**Make sure** all the syntax is correct on the flow by clicking `Validate` button.

![Flows 4](../images/flows_4.png)

Click **Train** button to run the machine learning algorithm.

![Flows 5](../images/flows_5.png)

**Wait** for the confirmation.

![Flows 6](../images/flows_6.png)

**Run** the test of the skill:

![Test](../images/tests_chat.gif)

> NOTE:
>
> If you see an error message at this point, it means there is a problem with the custom component code.
>
> To get more information about the issue, check the logs.
>
> Go to Components ![Components Icon](../images/components-icon.png) on the left menu and click on Diagnostics for your Custom Component, then on **View Logs**.
>
> ![View Logs](../images/cc_view_logs.png)

## It works

To see how we request against the database we can add a new item.

**Insert** your third element in the collection by going to APEX and on the Top Menu on **SQL Workshop**, click **Object Browser**:

![](../images/apex_object_browser_menu_clean.png)

Select **TASKS** table on the left and click the tab **Data**, then click **Insert Row**:

![Object Browser Data](../images/apex_object_data_inser_new.png)

**Add** a new **Text** like `New item!` and **click** **Create**:

![Object Browser Data](../images/apex_object_data_insert_item.png)

**Confirm** the row has been created:

![Object Browser Data](../images/apex_object_data_insert_row_created.png)

**Run** the chat again and reset the previous conversation.

![Final Test](../images/test_final_1.png)

**Type** `show me my tasks`:

![Final Test](../images/test_final_2.png)

**Check** the result.

![Final Test](../images/test_final_3.png)

# Congratulations! Well done!

Continue to the Appendix for more information!

---

[**<< Go to Lab 4**](../lab4/README.md) | [Home](../README.md) | [**Go to APPENDIX >>>>>**](../appendix/README.md)
