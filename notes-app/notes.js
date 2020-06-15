const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const dubplicateNotes = notes.filter((note) => note.title === title)

    debugger

    if (dubplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const nonDubplicateNotes = notes.filter((note) => note.title !== title)
    saveNotes(nonDubplicateNotes)
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const listNotes = () => {
    try {
        const notes = loadNotes()
        console.log(chalk.greenBright('Your Notes'))
        notes.forEach((note) => {
            console.log(chalk.green(note.title + ": " + note.body))
        })
    } catch (e) {
        return []
    }
}

const readNote = (title) => {
    try {
        const notes = loadNotes()
        const foundNote =  notes.find((note) => note.title === title)
        if (foundNote) {
            console.log(chalk.inverse(foundNote.title))
            console.log(foundNote.body)
        } else {
            console.log(chalk.red.inverse('Note not found!'))
        }
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}