# Lab 2: Create Application and REST API

![APEX](../images/apex.png)

Each Autonomous Database instance includes Oracle REST Data Services (ORDS) and Simple Object Data Access (SODA) that provides HTTPS interfaces for working with the contents of your Oracle Database in REST enabled schemas.

![ORDS](../images/ords.png)

In this lab you will create a `tasks` table, REST enabling it, and make the service available for the Custom Component. Normally, you would REST enable database objects in a remote database schema, and then utilize those REST endpoints to define Web Source modules in an application, where APEX is installed, within the local database, as outlined below.

![ORDS and APEX](../images/rest_arch.png)

## Create APEX Workspace

In this part of the lab we are creating an APEX workspace. From the Autonomous Database Home page go to **Tools** section and select **Oracle Application Express** area.

![ORDS](../images/apex_workspace1.png)

This will open a new browser tab for Application Express Administration.
Login as the Admin user, with the **Admin** password you specified at Autonomous Database creation time.

![ORDS](../images/apex_workspace2.png)

Create the Lab Workspace on the Welcome to "Oracle Application Express" page, select **Create Workspace**.

![ORDS](../images/apex_workspace3.png)

Use the following information to fill out the form:

- **Database User**: ATP_ODA
- **Password**: Any password that meets the Oracle Cloud requirements.
- **Workspace Name**: ATP_ODA

Select **Create Workspace**.

![ORDS](../images/apex_workspace4.png)

You will be returned to the Oracle APEX administration page, and a message will be displayed "**Workspace Created**".

![ORDS](../images/apex_workspace5.png)

Sign in as the **ATP_ODA** user by selecting the icon on the centre of the screen where you can see the name of the user, **ATP_ODA**.

![ORDS](../images/apex_workspace6.png)

Add the **name of the worspace**, **user name** and **password**: **ATP_ODA** and click **Sing in**.

![ORDS](../images/apex_workspace7.png)

Now we are ready to create your APEX application on this workspace.
You can check that you are correctly signed in with the **ATP_ODA** user in the right top corner.

![ORDS](../images/apex_workspace8.png)

## Create a Table with Quick SQL

Quick SQL reduces the time and effort required to create SQL tables, triggers, and index structures.

It is not designed to be a replacement for data modeling. Quick SQL is simply a quick way to develop a script for simple tables and views.

Once the SQL is generated it can be tweaked and expanded upon.

Quick SQL provides a quick way to generate the SQL required to create a relational data model from an indented text document.

Use Cases:

- Quickly create robust data models
- Easily generate random data
- Learn SQL create table, select, insert, index, trigger, PL/SQL package, and view syntax using provided examples

Go to Quick SQL.

![Quick SQL](../images/apex_quick_sql_menu.png)

Write on the left panel the following table definition:

```bash
tasks
  text
```

Click **Generate SQL**.

![Generate SQL](../images/apex_generate_sql.png)

Click **Save SQL Script**.

![Save SQL Script](../images/apex_save_sql_script.png)

Set the name of the script to `tasks` and confirm **Save Script**.

![Save SQL Script Confirm](../images/apex_save_sql_script_confirm.png)

Click **Review and Run**.

![Save SQL Script](../images/apex_quick_sql_review.png)

Click **Run**.

![Save SQL Script](../images/apex_quick_sql_run.png)

Click **Run Now**.

![Save SQL Script](../images/apex_quick_sql_run_now.png)

Make sure all statements are successfully run and there are no errors.

![Save SQL Script](../images/apex_quick_sql_run_success.png)

## Insert rows on the table

We are going to mock some data to use it later with your Custom Component.

Go to the Top Menu on **SQL Workshop**, click **Object Browser**.

![](../images/apex_object_browser_menu.png)

Select `TASKS` table on the left and click the tab `Data`, then click `Insert Row`:

![Object Browser Data](../images/apex_object_data.png)

Leave `Id` empty and fill the field `Text` with a task description you like. When you are happy with your new task, click `Create and Create Another` and do the same with another task:

![Object Browser Data](../images/apex_object_insert_row_1.png)

Do the same with the second task entry:

![Object Browser Data](../images/apex_object_insert_row_2.png)

Finally, click `Create` and check the two rows are as expected:

![Object Browser Data](../images/apex_object_new_rows.png)

## REST Enabling the Database Object

In the main menu, select **SQL Workshop**, click **RESTful Services**.

![REST Enable Menu](../images/apex_rest_services_menu.png)

Register your APEX schema with ORDS so we can offer a REST API of our tables, click `Register Schema with ORDS`:

![REST Enable Register](../images/apex_rest_enable_register.png)

Set the `Schema Alias` name to `tasks` and click `Save Schema Attributes` to confirm:

![REST Enable Save](../images/apex_rest_enable_save.png)

You will see that the Schema is now enabled.

![REST Enable Success](../images/apex_rest_enable_register_success.png)

We need to create a Module with the base path for your API, a Template and a Handler to resolve the request of a specific method (GET, PUT, DELETE, etc).

Select **Modules** on the left and click **Create Module**:

![](../images/apex_rest_module.png)

Fill **Module Name** and **Base Path** fields with the following data and click **Create Module**:

- **Module Name**: `com.example.oda`
- **Base Path**: `/oda/`

![](../images/apex_rest_module_create.png)

Confirm the module has been created.

![](../images/apex_rest_module_create_success.png)

Scroll down and click **Create Template**:

![](../images/apex_rest_module_create_template.png)

Fill **URI Template** with `tasks/` and click **Create Template**:

![](../images/apex_rest_template_create.png)

Confirm the Template has been created and click **Create Handler**:

![](../images/apex_rest_handler_create.png)

Make sure the fields for the Handler are as follows:

- **Method**: `GET`
- **Source Type**: `Collection Query`
- **Format**: `JSON`

![](../images/apex_rest_handler_create_get.png)

On the **Source** area we are going to run the SQL select to fetch the data form the schema:

```sql
select * from tasks
```

> NOTE: please, don't use "`;`" at the end of the SQL statement.

![](../images/apex_rest_handler_source_query.png)

Click **Create Handler** to save the changes on the GET handler:

![](../images/apex_rest_handler_create_confirm.png)

Confirm the Handler has been created and copy the **Full URL**:

![](../images/apex_rest_handler_create_success.png)

## It works

We will use the full URL for testing on the browser to verify the GET Handler works. Go to your favorite browser and paste the URL you copied:

![](../images/apex_rest_browser_test.png)

You should see the items with `id` and `text` and other fields and references in JSON format.

How many items do you see? You should have as many tasks as you created before in the table.

Congratulations! You are ready to go to the next Lab!

---

[**<< Go to Lab 1**](../lab1/README.md) | [Home](../README.md) | [**Go to Lab 3 >>>>>**](../lab3/README.md)
