package carro.crudCarros.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import carro.crudCarros.entity.Carro;
import carro.crudCarros.entity.Marca;
import carro.crudCarros.repository.MarcaRepository;



@Service
public class MarcaService {
	
	@Autowired
	private MarcaRepository marcaRepository;
	
	public String save(Marca marca) {
		this.marcaRepository.save(marca);
		
		return "Marca salvo com sucesso!";
	}
	

	
	
	public List<Marca> findAll(){
		List<Marca> Lista = this.marcaRepository.findAll();
		return Lista;
	}
	
	
	public String update(Marca marca, Long id) {
		marca.setId(id);
		this.marcaRepository.save(marca);
		
		return "A marca foi salvo com sucesso";
	}
	
	
	public String delete(Long id) {
		this.marcaRepository.deleteById(id);
		return "Marca deletada com sucesso!";
	}

}
