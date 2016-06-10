 self.addListTask = function(){
        self.listTask.push(new ListTask({title: self.newListText()}));
        self.newListText("");
    };