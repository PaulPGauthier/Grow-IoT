Polymer({
  is:"thing-actions",
  properties:{
    name:{
      type:String,
      value:"Arun Kumar"
    },
    nickname:{
      type:String,
      value:"tkay"
    },
    show:{
      type:String,
      value:"show"
    },
    nndHidden:{
      type:Boolean,
      value:true
    }
  },
  showNickName:function(){
    this.nndHidden = !this.nndHidden;
    this.show = this.nndHidden ? "show" : "hide";
  }

})


// import later from 'meteor-later';

// Device.ActionComponent = class ActionComponent extends Device.DisplayComponent {
//   onCreated() {
//     super.onCreated();

//     return this.type = Template.currentData().type;
//   }

//   events() {
//     return super.events().concat({
//       ['click .command'](e) {
//         e.preventDefault();
//         let type = e.currentTarget.dataset.call;
//         // OPTIONS NOT WORKING.
//         let options = (e.currentTarget.dataset.options != null);
//         return Meteor.call('Device.sendCommand',
//           this.currentDeviceUuid(),
//           type,
//           options,
//           (error, documentId) => {
//             if (error) {
//               console.error("New deviceerror", error);
//               return alert(`New deviceerror: ${error.reason || error}`);
//             }
//           }
//         );
//       }
//     });
//   }
// };

// Device.ActionComponent.register('Device.ActionComponent');
