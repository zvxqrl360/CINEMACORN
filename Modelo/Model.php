<?php
class Model{
    private $db;
    
    public function __construct() {
        $this->db = new mysqli('localhost:3307','root','','empresa');
        if($this->db->connect_error){
            die("Error de conexión a la base de datos").$this->db->connect_error();
        }
    }
    
    public function insertData($name){
        $query = "insert into usuario (nombre) values('$name')";
        $result = $this->db->query($query);
        if(!$result){
            die('Error en la consulta: '.$this->db->error);
        }
    }
    
    public function getData(){
        $query ="select * from usuario";
        $result = $this->db->query($query);
        if(!$result){
            die('Error en la consulta: '.$this->db->error);
        }
        return $result;
    }    
    
}

