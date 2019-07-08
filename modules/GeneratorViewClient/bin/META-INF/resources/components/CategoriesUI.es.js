import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
import templates from './CategoriesUI.soy';
import Service from "../service/Service"
/**
 * TextUI Component
 */
class CategoriesUI extends Component {
	
	 created() {
		 this.setResultCategories = this.setResultCategories.bind(this);
		 //this.setSelectedCategories = this.setSelectedCategories.bind(this);

	        console.log('-----CategoriesUI-created----');
	        new Service().getCategories(this.setResultCategories);
	        
	    
	 

	          }

	    setResultCategories(resultCategories){
	       
	    	console.log(resultCategories.length);
	       
	        var _itemsCategoriesKeys= [];
		     
	        for(var i = 0; i< resultCategories.length; i++)
	        	_itemsCategoriesKeys.push(Object.keys(resultCategories[i]));
	        
	        console.log(_itemsCategoriesKeys);
	        
	        this.setState({itemsCategories: resultCategories }); 
	        this.setState({itemsCategoriesKeys: _itemsCategoriesKeys });
	      //  this.setState({itemsResultSelected: {} })
	    }
	    
	    
	    
	    closeSelectDocumentC(event) {
	        if(event === undefined)
	            return
	        console.log('-----receive event closeSelectDocument----')
	        event.preventDefault();
	        this.setState({isOpenSelect: false });
	        }
	    
	    openSelectDocumentC(event) {
	        if(event === undefined)
	            return
	        console.log('-----receive event openSelectDocument----')
	        event.preventDefault();

	     //   new Service().getDocuments('cod-1','rooms',this.setResultDocument)

	    }
	    
	    removeSelectedCategory(event){
	    	 	 
	    	 
	    }
	    
	    
	    setSelectedCategories(event){
	        if(event === undefined)
	            return;
	        console.log('-----receive event setSelectedResult Document----')
	        event.preventDefault();
	        console.log(event);
	        var _itemsCategoriesKeysRender= [];
			   
	        var _itemsCategoriesSelected = this.itemsCategoriesSelected;
	        console.log(event.target.id);
	        console.log(event.target.value);
	        
	        var currentArray = event.target.id.split(",");
	        console.log("currentArray");
	        console.log(currentArray);
	        
	   if(currentArray[3] == "T")
	    {
	        if(_itemsCategoriesSelected[event.target.id]){
	        	delete  _itemsCategoriesSelected[event.target.id];
	        	var element = document.getElementById(event.target.id);
	        	element.setAttribute("style","text-decoration: none;");
	        	 _itemsCategoriesKeysRender = Object.keys(_itemsCategoriesSelected);
				  
	        }else{
	        	 _itemsCategoriesSelected[event.target.id]=event.target.innerText;
	        	 var element = document.getElementById(event.target.id);
		        	element.setAttribute("style","text-decoration: underline;");
		       _itemsCategoriesKeysRender = Object.keys(_itemsCategoriesSelected);
					  
	        }
	    }  
	   else
	    {
	    
		   var isAdded = false;
		   var auxKeys =  Object.keys(_itemsCategoriesSelected);
		   
		   if(auxKeys.length!= null && auxKeys.length!= 0){
			   
			   console.log("88");
			   console.log(auxKeys);
				var currentCategoryArray = event.target.id.split(",");
			   console.log(event.target.id);
				var actualKeys = [];
			   
			   for(var i=0; i < auxKeys.length;i++){
				   var auxA = auxKeys[i].split(",");
				   console.log("for: " + auxKeys[i]);
				   if(auxA[1]==currentCategoryArray[1] &&
						   auxA[2]==currentCategoryArray[2] &&
						   auxA[3]==currentCategoryArray[3])
					   actualKeys.push(auxKeys[i]);
				   
				  // console.log(auxKeys[i]);
			
			   }
			   
			   if(actualKeys.length==0){
				  // console.log(actualKeys[0]);
				   _itemsCategoriesSelected[event.target.id]=event.target.innerText;
				   _itemsCategoriesKeysRender = Object.keys(_itemsCategoriesSelected);
				    var element = document.getElementById(event.target.id);
		        	element.setAttribute("style","text-decoration: underline;");
			 
			   }else if(actualKeys.length==1){
				   console.log(actualKeys[0]);
				    if(actualKeys[0] == event.target.id){
				    	delete  _itemsCategoriesSelected[event.target.id];
			        	var element = document.getElementById(event.target.id);
			        	element.setAttribute("style","text-decoration: none;");
			        	 _itemsCategoriesKeysRender = Object.keys(_itemsCategoriesSelected);
					
				    }else{
				    	delete  _itemsCategoriesSelected[actualKeys[0]];
				    	 _itemsCategoriesSelected[event.target.id]=event.target.innerText;
				    	 var element = document.getElementById(actualKeys[0]);
				        	element.setAttribute("style","text-decoration: none;");
				        	 var element1 = document.getElementById(event.target.id);
					        	element1.setAttribute("style","text-decoration: underline;");
					        
				        	 _itemsCategoriesKeysRender = Object.keys(_itemsCategoriesSelected);
						
				    	
				    }
				   
			   }
			   
			   
			   console.log(actualKeys);
			   
			   
			   
			   
			   _itemsCategoriesKeysRender = Object.keys(_itemsCategoriesSelected);
				
			   
			   
		   }else{
			   console.log("91");
			   _itemsCategoriesSelected[event.target.id]=event.target.innerText;
			   _itemsCategoriesKeysRender = Object.keys(_itemsCategoriesSelected);
			    var element = document.getElementById(event.target.id);
	        	element.setAttribute("style","text-decoration: underline;");
		   }
		   
		   
	    }
	       
	   
	   
	        console.log("_itemsCategoriesSelected KEYS");
	        console.log(Object.keys(_itemsCategoriesSelected));
	      
	        
	        this.setState({itemsCategoriesSelected: _itemsCategoriesSelected })
	         this.setState({itemsCategoriesKeysRender: _itemsCategoriesKeysRender })
	    }
}


CategoriesUI.STATE = {
    itemsCategories:{value:[]},
    itemsCategoriesKeys:{value:[]},
    itemsCategoriesKeysRender:{value:[]},
    itemsCategoriesSelected:{value:{}},
}
// Register component
Soy.register(CategoriesUI, templates);

export default CategoriesUI;