# Lab 5: Create Digital Assistant Skill

**XXX** Intro

## Build your first Skill

**XXX** Create Skill

Click on `+ New Skill` button to start:

![Create Skill](../images/skill_1.png)

Fill the information like in the image and click `Create` button:

![Create Skill](../images/skill_2.png)

---

Import Custom component is very simple.

Go to the Components view ![Components](../images/components-icon.png) on the left menu

![Create Skill](../images/cc_import_1.png)

The web form to upload the file will show up

![Create Skill](../images/cc_import_2.png)

Upload `tasks-cc-1.0.0.tgz` file

![Create Skill](../images/cc_import_3.png)

Fill the information and remember to `Enable Component Logging` with the toggle button.

![Create Skill](../images/cc_import_4.png)

Wait for the deployment

![Create Skill](../images/cc_import_5.png)

Make sure the `Status` is `Ready` and you see all the information like in this screenshot

![Create Skill](../images/cc_import_6.png)

---

**XXX** Create Greeting intent

**XXX** Create ListTasks intent

## Put everything together

Time to integrate your Custom Component with the Intent `ListTasks` created before.

On the left menu, you will find the Flows entry with this icon:

![Flows](../images/flows-menu-item.png)

Delete the initial content and replace it with:

```yaml
metadata:
  platformVersion: "1.1"
main: true
name: mytasks

context:
  variables:
    iResult: "nlpresult"

states:
  intent:
    component: "System.Intent"
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
      text: "Greetings, hooman!"
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
    component: "System.Output"
    properties:
      text: |-
        Success!
      keepTurn: false
    transitions:
      return: "done"

  failureState:
    component: "System.Output"
    properties:
      text: |-
        Failed! Check the logs.
      keepTurn: false
    transitions:
      return: "done"

  unresolved:
    component: System.Output
    properties:
      translate: false
      text: "I don't understand. What do you want to do?"
      keepTurn: false
    transitions:
      return: unresolved
```

**XXX** Explain every part of the Flows definition

**XXX** Validate

**XXX** Train

**XXX** Test

Run the test of the skill:

![Test](../images/test_1.png)

Say `Hi` and wait for the response:

![Say Hi](../images/test_2.png)

Say `List my tasks` and wait:

![Ask for tasks](../images/test_3.png)

The list of tasks will be replied from the bot:

![Response](../images/test_4.png)

> NOTE:
>
> If you see an error message at this point, it means there is a problem with the custom component code.
>
> To get more information about the issue, check the logs
>
> Go to Components ![Components Icon](../images/components-icon.png) on the left menu and click on Diagnostics for your Custom Component, then on View Logs
>
> ![View Logs](../images/cc_view_logs.png)

## It works

**XXX** Insert another entry and test again.

Congratulations! You are ready to go to the next Lab!

---

[**<< Prev**](../lab4/README.md) | [home](../README.md) | [**APPENDIX >>>>>**](../appendix/README.md)
