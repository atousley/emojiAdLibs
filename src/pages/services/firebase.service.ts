import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';

@Injectable()
export class FirebaseService {

  adLib1Data: any;
  private snapshotChangesSubscription: any;

  constructor(
    public afs: AngularFirestore
  ){}

  getAdlib1Data(id){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;

      //var ref = this.afs.collection('people').doc(currentUser.uid).collection('adlib1').doc(id);
      //console.log(ref);

      //var ref = firebase.database().ref();
      //ref.once('value')
      //  .then(function(snapshot) {
      //    console.log("im the snapshot" + " " + snapshot);
      //  })


      this.adLib1Data = this.afs.collection('people').doc(currentUser.uid).collection('adlib1').doc(id).ref.get()
      .then(
        res => resolve(res),
        err => reject(err)
     )

      //this.adLib1Data = this.afs.collection('people').doc(currentUser.uid).collection('adlib1').doc(id).snapshotChanges()
    //  .subscribe(snapshots => {
      //  resolve(snapshots);
        //console.log(snapshots);
    //  })

    });
  }

  unsubscribeOnLogOut(){
    //remember to unsubscribe from the snapshotChanges
    // debugger;
    this.snapshotChangesSubscription.unsubscribe();
  }

  createAdLib(value){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('people').doc(currentUser.uid).collection('adlib1').add({
        timestamp: value.timestamp,
        label1: value.label1,
        char1: value.char1,
        label2: value.label2,
        char2: value.char2,
        label3: value.label3,
        char3: value.char3,
        label4: value.label4,
        char4: value.char4,
        label5: value.label5,
        char5: value.char5
      })
      .then(
        res => resolve(res),
        err => reject(err),
      )
    })
  }

  deleteAdlib1(){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('people').doc(currentUser.uid).collection('adlib1').delete()
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

}
