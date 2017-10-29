Please read this first, to work with CSS in JS
https://www.w3schools.com/jsref/dom_obj_style.asp

### Task

1. Please find all inputs using 4 DOM methods, e.g. getElementsByTagName and etc.
2. Clone the last block with label and input (using cloneNode JS DOM method: https://developer.mozilla.org/ru/docs/Web/API/Node/cloneNode) and
add the this block (.input-group) to the end of form before button, but first change label text to Age
3. Add class 'input-lg' to all inputs on the page, including new created
4. Add to each input unique id, e.g. 'age' for age field and etc., and to the label that is upper add 'for' attribute with the same value as id
5. Add placeholders for each input, e.g. for 'age' field, 'Please enter your age'
6. Please add this last block before submit button using JS

    ```html
      <div class="input-group col-xs-12 marg">
        <label for="">Gender</label>
        <select class="form-control">
           <option value="male">Male</option> 
           <option value="female">Female</option> 
        </select>
      </div>    
    ``` 