function BinarySearchTree(keys){
    //Node构造函数
    let Node = function (key){
       this.key = key
       this.left = null
       this.right = null
    }
    let root = null
    let insertNode = (node,newNode)=>{
       if(newNode.key < node.key){
         if(node.left === null){
           node.left = newNode
         }else {
           insertNode(node.left,newNode)
         }
       }else {
         if (node.right === null) {
           node.right = newNode
         }else {
           insertNode(node.right,newNode)
         }
       }
    }
    this.insert = (key)=>{
       let newNode = new Node(key)
       if (root === null) {
         root = newNode
       }else {
         insertNode(root,newNode)
       }
    }
    keys.forEach((key)=>{
     this.insert(key)
    })
    return root
  }
  const keys = [1,3,2,5]
  const miao1 = BinarySearchTree(keys)
  const miao2 = BinarySearchTree([2,1,3,null,4,null,7])

  console.log(miao1)
  console.log(miao2)

  var mergeTrees = function(root1, root2) {
    if(!root1){
        return root2
    }
    if(!root2){
        return root1
    }
    root1.key = root1.key + root2.key
    root1.left = mergeTrees(root1.left, root2.left)
    root1.right = mergeTrees(root1.right, root2.right)
    return root1
};

// console.log(mergeTrees(miao1,miao2))