import Component from 'metal-component/src/Component';
import TextLocalizableUI from './TextLocalizableUI.es';
import CheckBoxUI from './CheckBoxUI.es';
import TextAreaUI from './TextAreaUI.es';
import TitleLocalizableUI from './TitleLocalizableUI.es';
import ViewNested from './ViewNested.es';
import DateUI from './DateUI.es';

import Service from "./service/Service"


import Soy from 'metal-soy/src/Soy';
import templates from './NewStructure.soy';
/**
 * View Component
 */
class NewStructure extends Component {
    rendered(firstRender) {
        console.log('-----ViewNested-rendered----'+JSON.stringify(firstRender));


    }

    created(event){
    	 
    	this.setResultCategories = this.setResultCategories.bind(this);
    	console.log("New Created");
    	 new Service().getCategories(this.setResultCategories);
    }
    
    setResultCategories(resultCategories){
	       
        var _itemsCategoriesKeys= [];
        var _itemsCategoriesKeys1= [];
        
        var _itemsMarcasKeys= [];
        var _itemsMarcasKeys1= [];
        
	     var subMarcas;
	     
          for(var i = 0; i< resultCategories.length; i++)
        {	_itemsCategoriesKeys.push(Object.keys(resultCategories[i]));
        	var c = Object.keys(resultCategories[i]);
        if(c[0]=='Marcas')
        	subMarcas = resultCategories[i];
        }
        
         console.log("MARCASSSKEYSS");
         console.log(subMarcas['Marcas']);
         subMarcas = subMarcas['Marcas'];
        for(var j = 0; j < _itemsCategoriesKeys.length;j++){
        	 var temp = new Object();
             var te =  _itemsCategoriesKeys[j];
             temp["name"] = te[0];
             temp["nameFormat"] = te[0].replace(" ","").replace(" ","");
             
             _itemsCategoriesKeys1.push(temp);
        }
     
        
        
        for(var i = 0; i< subMarcas.length; i++)
        	{console.log(subMarcas[i]);
        	_itemsMarcasKeys.push(Object.keys(subMarcas[i]));}
        	
        
        console.log("_itemsMarcasKeys");
        console.log(_itemsMarcasKeys);
        
        console.log("resultCategories");
        console.log(resultCategories);
        console.log("_itemsCategoriesKeys");
        console.log(_itemsCategoriesKeys1);
        
        this.setState({itemsMarcasKeys: _itemsMarcasKeys });    
        this.setState({itemsCategories: resultCategories }); 
        this.setState({itemsCategoriesKeys: _itemsCategoriesKeys1 });
    }
    
    setSelectedCategories(event){
      if(event === undefined)
    	  return;
        event.preventDefault();
        console.log(event.target.id);
      var _itemsCategoriesKeysRender= []; 
      var _itemsCategoriesSelected = this.itemsCategoriesSelected;
      var currentArray = event.target.id.split(",");
        console.log(event.target.id);
      if(currentArray[3] == "T"){
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
      
      else{
    
    	  var isAdded = false;
    	  var auxKeys =  Object.keys(_itemsCategoriesSelected);
	   
    	  	if(auxKeys.length!= null && auxKeys.length!= 0){
    	  		var currentCategoryArray = event.target.id.split(",");
    	  		var actualKeys = [];
		   
    	  		   for(var i=0; i < auxKeys.length;i++){
    	  			  var auxA = auxKeys[i].split(",");
    	  			  	if(auxA[1]==currentCategoryArray[1] &&
    	  			  			auxA[2]==currentCategoryArray[2] &&
    	  			  			auxA[3]==currentCategoryArray[3])
    	  			  			actualKeys.push(auxKeys[i]);
    	  		   	}
		   
    	  		   if(actualKeys.length==0){
    	  			   _itemsCategoriesSelected[event.target.id]=event.target.innerText;
    	  			   _itemsCategoriesKeysRender = Object.keys(_itemsCategoriesSelected);
    	  			   var element = document.getElementById(event.target.id);
    	  			   element.setAttribute("style","text-decoration: underline;");
		 
    	  		   }else if(actualKeys.length==1){
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
		   
		   _itemsCategoriesKeysRender = Object.keys(_itemsCategoriesSelected);
			
	   }else{
		   
		   _itemsCategoriesSelected[event.target.id]=event.target.innerText;
		   _itemsCategoriesKeysRender = Object.keys(_itemsCategoriesSelected);
		   var element = document.getElementById(event.target.id);
        	element.setAttribute("style","text-decoration: underline;");
	   }
	  
    }
        
        this.setState({itemsCategoriesSelected: _itemsCategoriesSelected })
        this.setState({itemsCategoriesKeysRender: _itemsCategoriesKeysRender })
}
    
    removeSelectedCategory(event){
    	  console.log(event.target.id);
    	  var ar = event.target.id.split(",");
    	  var _itemsCategoriesKeysRender= []; 
    	     
    	  var _itemsCategoriesSelected = this.itemsCategoriesSelected;
    	  console.log(ar[0]+","+ar[1]+","+ar[2]+","+ar[3]);
    	  delete  _itemsCategoriesSelected[ar[0]+","+ar[1]+","+ar[2]+","+ar[3]];
    	   var element = document.getElementById(ar[0]+","+ar[1]+","+ar[2]+","+ar[3]);
       	 element.setAttribute("style","text-decoration: none;");
       	var element1 = document.getElementById(ar[0]+","+ar[1]+","+ar[2]+","+ar[3]+",S");
       	console.log(element1);
       	console.log(element1.parentNode);
       	element1.parentNode.removeChild(element1);
       	
 	   _itemsCategoriesKeysRender = Object.keys(_itemsCategoriesSelected);
 		
         this.setState({itemsCategoriesSelected: _itemsCategoriesSelected })
         this.setState({itemsCategoriesKeysRender: _itemsCategoriesKeysRender })

   }
    
    closeOpenTab(event) {
        if(event === undefined)
            return
        console.log('-----receive event closeOpenTab----')
        
       event.preventDefault();
        console.log('-----closeOpenTab----'+event.currentTarget.attributes['aria-expanded'].value);
              
        var collapseInfo1 = this.collapseInfo;
        collapseInfo1[event.currentTarget.id]=event.currentTarget.attributes['aria-expanded'].value=='true'
         this.setState({collapseInfo: collapseInfo1 })
    }
    
    closeOpenTabC(event) {
    	
    	  if(event === undefined)
              return
          console.log('-----receive event closeOpenTabC----')
          
         event.preventDefault();
          console.log('-----closeOpenTabC----'+event.currentTarget.attributes['aria-expanded'].value);
          if(event.currentTarget.attributes['aria-expanded'].value == "true")
      	{
      	//console.log(event.target);
      	 var ar = event.target.id.split(",");
      	 console.log(event.target);
      	 console.log(ar);
      	//  if(document.getElementById(ar[0]+"UL").id!=null)
      	//console.log(document.getElementById(ar[0]+"UL").id);
      	   var element = document.getElementById(document.getElementById(ar[0]+"UL").id);
           	 element.setAttribute("style","display: none;");
          
      	} else{
      		console.log("false");
      		 var ar = event.target.id.split(",");
      		 console.log(ar);
      		 console.log(document.getElementById(ar[0]+"UL").style.display);
      		if(document.getElementById(ar[0]+"UL").style.display=="none")
      			document.getElementById(ar[0]+"UL").style.display="block";
      	}
      	
    	  var collapseInfo1 = this.collapseInfo;
          collapseInfo1[event.currentTarget.id]=event.currentTarget.attributes['aria-expanded'].value=='true'
           this.setState({collapseInfo: collapseInfo1 })
    }

    changeLanguage(event) {
        event.preventDefault();
        console.log('-----changeLanguage----'+event.currentTarget.id);
        //this.data['selectedLanguage']=event.currentTarget.id
        var data1 = this.data;
        data1['selectedLanguage']=event.currentTarget.id
        this.setState({data: data1 })
        //cerrado: false, collapsed, ''
        //abierto: true, '', 'show'
    }

}

NewStructure.STATE = {
	    itemsCategories:{value:[]},
	    itemsMarcasKeys:{value:[]},
	    itemsCategoriesKeys:{value:[]},
	    itemsCategoriesKeysRender:{value:[]},
	    itemsCategoriesSelected:{value:{}},
	}
Soy.register(NewStructure, templates);

export default NewStructure;