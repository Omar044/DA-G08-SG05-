import firebase_admin
from firebase_admin import credentials, firestore
from flask import Flask, jsonify, request

cred = credentials.Certificate('prop2Secretkey.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

app = Flask(__name__)

# Obtener todos los doctores
@app.route('/doctores', methods=['GET'])
def obtener_doctores():
    referencia_doctores = db.collection('doctores')
    documentos = referencia_doctores.stream()
    doctores = [{doc.id: doc.to_dict()} for doc in documentos]
    return jsonify(doctores)

# Agregar un nuevo doctor
@app.route('/nuevoDoctor', methods=['POST'])
def agregar_doctor():
    datos_doctor = request.get_json()
    referencia_doctores = db.collection('doctores')
    referencia_doctores.add(datos_doctor)
    return jsonify({"mensaje": "Doctor agregado con éxito"}), 201

# Obtener todos los pacientes
@app.route('/pacientes', methods=['GET'])
def obtener_pacientes():
    referencia_pacientes = db.collection('pacientes')
    documentos = referencia_pacientes.stream()
    pacientes = [{doc.id: doc.to_dict()} for doc in documentos]
    return jsonify(pacientes)

# Agregar un nuevo paciente
@app.route('/nuevoPaciente', methods=['POST'])
def agregar_paciente():
    datos_paciente = request.get_json()
    referencia_pacientes = db.collection('pacientes')
    referencia_pacientes.add(datos_paciente)
    return jsonify({"mensaje": "Paciente agregado con éxito"}), 201

# Actualizar un paciente por su ID
@app.route('/pacientes/<id>', methods=['PUT'])
def actualizar_paciente(id):
    datos_paciente = request.get_json()
    paciente_ref = db.collection('pacientes').document(id)
    paciente = paciente_ref.get()
    
    if not paciente.exists:
        return jsonify({"mensaje": "Paciente no encontrado"}), 404
    
    paciente_ref.update(datos_paciente)
    return jsonify({"mensaje": "Paciente actualizado con éxito"}), 200

# Eliminar un paciente por su ID
@app.route('/pacientes/<id>', methods=['DELETE'])
def eliminar_paciente(id):
    paciente_ref = db.collection('pacientes').document(id)
    paciente = paciente_ref.get()
    
    if not paciente.exists:
        return jsonify({"mensaje": "Paciente no encontrado"}), 404
    
    paciente_ref.delete()
    return jsonify({"mensaje": "Paciente eliminado con éxito"}), 200

if __name__ == '__main__':
    app.run(debug=True)
    