module.exports = (function (){
	var Anion = require('./anion')


	function CircularLinkedList(){
		this.len = 0; //dont use length
		Object.defineProperty(this, 'length', {
		    get: function() {
		        return this.len;
		    }.bind(this)
	    });
	}

	CircularLinkedList.prototype.add = function (data){
		/** STEP 1 **/
		var node = new Anion(data);

		/** STEP 2 **/
		if (this.len == 0) {//list is empty aka len = 0
			this.head = node;
			this.tail = node; //set tail as node
		}//list is non-empty
		else {//attach to the tail node
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node
		}
		this.tail.next = this.head

		/** STEP 3 **/
		this.len++;
		return this;

	}

	CircularLinkedList.prototype.nextNodeThenGetValue = function (){
		this.head = this.head.next
		return this.head.value

	}
	return CircularLinkedList
})()
