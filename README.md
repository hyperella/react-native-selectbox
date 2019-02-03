# React Native Selectbox
Easy to use select box for react native

 ```
 import SelectBox from 'selectbox';
 
 const genders = [
      {
        text: 'Male',
        value: 0
      },
      {
        text: 'Female',
        value: 1
      },
      {
        text: 'Intersex',
        value: 2
      }
    ]

        <SelectBox
            onChange={(value) => console.log(value)}
            height={250}
            defaultText={'Select Country'}
            options={countries}
            optionTextStyle={{color: 'purple'}}
            textKey={"text"}
            valueKey={"value"}
            showArrow
            optionStyle={{
              backgroundColor: '#fff',
              paddingVertical: 10,
              paddingHorizontal: 15,
              borderRadius: 10
            }}
          />


  ```

![enter image description here](https://im.ezgif.com/tmp/ezgif-1-d92190946bd7.gif)



|Prop| Description |
|--|--|
| onChange | returning selected value |
| height | option box modal height (default 200) |
| defaultText | default text for select box |
| options| options array must be object |
| textKey| object key for displaying |
| valueKey| object key for value |
| showArrow| show arrow on right side of select box |
| defaultValue| default value of select box |
| optionStyle| select box wrapper style must be an object |
| optionTextStyle| select box text style must be an object |
