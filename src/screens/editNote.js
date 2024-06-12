import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";

const EditNote = ({ setCurrenPage, currentNote, updateNote }) => {
  const [id, setId] = useState(currentNote.id);
  const [title, setTitle] = useState(currentNote.title);
  const [desc, setDesc] = useState(currentNote.desc);

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Update Note</Text>
      <CustomTextInput
        text={title}
        onChange={setTitle}
        label="Judul"
        placeholder="Judul"
        multiline={false}
        numberOfLines={1}
      />
      <CustomTextInput
        text={desc}
        onChange={setDesc}
        label="Deskripsi"
        placeholder="Deskripsi"
        multiline
        numberOfLines={4}
      />
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#247881"
          color="#fff"
          text="Simpan"
          width="100%"
          onPress={() => {
            updateNote(id, title, desc);
            setCurrenPage("home");
          }}
        />
      </View>
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#DDDDDD"
          color="#203239"
          text="Kembali ke Home"
          width="100%"
          onPress={() => setCurrenPage("home")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  pageTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    color: "#203329",
  },
  spacerTop: {
    marginTop: 30,
  },
});

export default EditNote;
