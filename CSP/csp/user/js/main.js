function sendform(obj_param)
{
 var book_obj = obj_param || book_fromform();
 $.ajax({
        type: "POST",
        url: "data/savehuman.csp",
        data: book_obj,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){
	        if(data.ok){
		        $('.okstr').text('Saved');
		        $('.error').text('');
	        }
	        else {
		        $('.okstr').text('');
		        $('.error').text(data.error);
	        }
	        window.setTimeout(function(){
		        $('.okstr').text('');
		        $('.error').text('');
	        }, 3000);
	        },
        failure: function(errMsg) {
            alert(errMsg);
        }
	});
}

function sendformb2t(obj_param)
{
 var book_obj = obj_param || book_fromform();
 $.ajax({
        type: "POST",
        url: "data/savehumanb2t.csp",
        data: book_obj,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){
	        if(data.ok){
		        $('.okstr').text('Saved');
		        $('.error').text('');
	        }
	        else {
		        $('.okstr').text('');
		        $('.error').text(data.error);
	        }
	        window.setTimeout(function(){
		        $('.okstr').text('');
		        $('.error').text('');
	        }, 3000);
	        },
        failure: function(errMsg) {
            alert(errMsg);
        }
	});
}

function sendformowner(obj_param)
{
 var book_obj = obj_param || book_fromform();
 $.ajax({
        type: "POST",
        url: "data/savehumanowner.csp",
        data: book_obj,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){
	        if(data.ok){
		        $('.okstr').text('Saved');
		        $('.error').text('');
	        }
	        else {
		        $('.okstr').text('');
		        $('.error').text(data.error);
	        }
	        window.setTimeout(function(){
		        $('.okstr').text('');
		        $('.error').text('');
	        }, 3000);
	        },
        failure: function(errMsg) {
            alert(errMsg);
        }
	});
}

webix.ready(function(){
    webix.ui(w_form);
    webix.ui(w_formb2t);
    webix.ui(w_formowner);
    webix.ui(w_table);
    webix.ui(box);

    $$('webix_control_97559').attachEvent("onItemClick", 
    	function(item_id, event){
	    	var form_obj = this.getParentView().getParentView();
	    	
	    	if (form_obj.validate())
	    	{
	    		var form_values = form_obj.getValues();
	    		var form_json_obj = JSON.stringify(form_values);
	    		sendform(form_json_obj);
	    	}
	    	else
	    	{
		        $('.error').text('Please, fill required fields');
		        window.setTimeout(function(){ 
		        	$('.okstr').text('');
		        	$('.error').text('');
		        	form_obj.clearValidation();
	        	}, 3000);
	    	}
	    	});
    
    $$('webix_control_97539').attachEvent("onItemClick", 
        	function(item_id, event){
    	    	var form_obj = this.getParentView().getParentView();
    	    	
    	    	if (form_obj.validate())
    	    	{
    	    		var form_values = form_obj.getValues();
    	    		var form_json_obj = JSON.stringify(form_values);
    	    		sendformb2t(form_json_obj);
    	    	}
    	    	else
    	    	{
    		        $('.error').text('Please, fill required fields');
    		        window.setTimeout(function(){ 
    		        	$('.okstr').text('');
    		        	$('.error').text('');
    		        	form_obj.clearValidation();
    	        	}, 3000);
    	    	}
    	    	});
    
    $$('webix_control_97519').attachEvent("onItemClick", 
        	function(item_id, event){
    	    	var form_obj = this.getParentView().getParentView();
    	    	
    	    	if (form_obj.validate())
    	    	{
    	    		var form_values = form_obj.getValues();
    	    		var form_json_obj = JSON.stringify(form_values);
    	    		sendformowner(form_json_obj);
    	    	}
    	    	else
    	    	{
    		        $('.error').text('Please, fill required fields');
    		        window.setTimeout(function(){ 
    		        	$('.okstr').text('');
    		        	$('.error').text('');
    		        	form_obj.clearValidation();
    	        	}, 3000);
    	    	}
    	    	});

});

