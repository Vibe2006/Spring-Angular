package carro.crudCarros.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import carro.crudCarros.entity.Marca;

public interface MarcaRepository extends JpaRepository<Marca, Long>{

	
	
	
}
