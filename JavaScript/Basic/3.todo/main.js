var TodoListItem = function(text) {
    this.text =text;
    this.done = false;
    this.date = new Date();
};

TodoListItem.prototype.toggle = function() {
    this.done = !this.done;
    return this;
};

var TodoList = function(view) {
    this.items = [];
    this.view = view;
    this.itemView = document.importNode(view.getElementsByClassName(this.className.item));
    this.render();

    var self = this;
    this.view.addEventListener('click', function(e) {
        var itemView = e.target.cloest('.'+self.className.item);
        if(itemView) {
            itemView.itemObject.toggle();
            self.render();
        }
    });
}

TodoList.prototype.className = {
    item: 'tl-item',
    itemText: 'tl-text',
    itemDate: 'tl-date',
    itemDone: 'tl-done'
};

TodoList.prototype.addItem = function(text) {
    var item = new TodoListItem(text);
    this.items.push(item);
    return this;
};

TodoList.prototype.render = function() {
    var itemViews = this.view.getElementsByClassName(this.className.item);
    while(itemViews.length > 0) {
        this.view.removeChild(itemViews[itemViews.length-1]);
    }

    for(var i=0; i<this.length; i++) {
        var item = this.items[i];
        var itemView = document.importNode(this.itemView, true);

        itemView.getElementsByClassName(this.className.itemText)[0].innerHTML = item;
        itemView.getElementsByClassName(this.className.itemDate)[0].innerHTML = item;

        if(item.done) {
            itemView.classList.add(this.className.itemDone);
        }

        this.view.appendChild(itemView);
    };

    return this;
};

var myView = document.getElementById('myTodoList');
var list = new TodoList(myView);
list
    .addItem("테스트1").addItem("테스트2").addItem("테스트3")
    .render();