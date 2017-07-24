# Command-Line-To-Do-List

Examples of how to use the Command Line To-Do List:

### Add 

Add 'Buy Groceries' to the empty list by typing:

```node ./tasks add 'Buy Groceries'```

You should see:

```Created task 1```

The next task will be task 2, and so on...

### List

See your full list of tasks by typing:

```node ./tasks list```

You should see something like this if there is more than 1 task on your list:

```
ID Description
-- -----------
1  Buy Groceries
2  Buy propane and propane accessories
3  Have a BBQ


You have 3 tasks
```

### Complete

Note that 'Buy Groceries' has been completed by typing:

```node ./tasks complete 1```

You should see:

```Completed task 1: Buy Groceries```

and listing the tasks should show the two tasks you have left

### Delete

Maybe you already have propane and propane accessories, so buying them shouldn't have been on your list

Delete that task by typing:

```node ./tasks deleteTask 2```

You should see:

```Deleted task 2: Buy propane and propane accessories```






