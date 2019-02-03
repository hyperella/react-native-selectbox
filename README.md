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
           onChange={this.cityChange}
           height={250}
           defaultText={'Select Gender'}
           options={genders}
           optionTextStyle={{color: 'purple'}}
           textKey={"text"}
           valueKey={"value"}
           optionStyle={{
             backgroundColor: '#fff',
             paddingVertical: 10,
             paddingHorizontal: 15,
             borderRadius: 10
           }}
        />
 
  ```

![enter image description here](https://im.ezgif.com/tmp/ezgif-1-5078267ab43a.gif)
