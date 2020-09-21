import { CriminalList } from "./criminals/CriminalList.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import { OfficerSelect } from "./officers/OfficerSelect.js";
import { NoteForm } from "./notes/NoteForm.js";
import { NoteList } from "./notes/NoteList.js"
import {  } from "./witnesses/WitnessList.js"
import './criminals/CriminalButton.js'
import './facilities/FacilitiesList.js'


CriminalList().then(NoteList);
ConvictionSelect();
OfficerSelect();
NoteForm();

