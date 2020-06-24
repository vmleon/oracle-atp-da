# Lab 2: Create Application and REST API

**XXX** Intro to REST and SODA

## Simple Object Data Access (SODA)

**XXX** expand details about SODA

The first step is to enable `ADMIN` user to use SODA by running the following statement on SQL Developer Web:

```sql
GRANT SODA_APP TO admin;
```

## Use the REST API

We are going to work with collections that in our case will contain the jokes.

Create `jokes` collection by run `curl` on the terminal:

- Remember to change `<password>` with the ADMIN password you have for your Autonomous Database.
- Another substititon is for `<soda_instance_url>`, you can find this information on Service Console:

![SODA URL](../images/soda_url.png)

Run the command to create the collection:

```bash
curl -XPUT -u 'ADMIN:<password>' '<soda_instance_url>/admin/soda/latest/jokes'
```

Insert your first element in the collection with:

```bash
curl -XPOST -H "Content-Type: application/json" -u 'ADMIN:<password>' --data '{"text": "Hello JSON"}' '<soda_instalce_url>/admin/soda/latest/jokes'
```

## It works

Look at the shape of the table behind SODA, go to SQL Developer Web and run:

```sql
DESCRIBE JOKES;
```

You will see something like this:

```bash
Name          Null?    Type
------------- -------- -------------
ID            NOT NULL VARCHAR2(255)
CREATED_ON    NOT NULL TIMESTAMP(6)
LAST_MODIFIED NOT NULL TIMESTAMP(6)
VERSION       NOT NULL VARCHAR2(255)
JSON_DOCUMENT          BLOB
```

**XXX** Explain a bit of the structure of the table

Check the content of the table `jokes` on SQL Developer Web:

```sql
SELECT * FROM JOKES;
```

How many rows do you see?

Do the same request with REST API:

```bash
curl -u 'ADMIN:<password>' '<soda_intance_url>/admin/soda/latest/jokes'
```

Congratulations! You are ready to go to the next Lab!

---

[**<< Prev**](../lab1/README.md) | [home](../README.md) | [**NEXT >>>>>**](../lab3/README.md)
