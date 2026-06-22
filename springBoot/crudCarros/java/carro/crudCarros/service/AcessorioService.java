package carro.crudCarros.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import carro.crudCarros.entity.Acessorio;
import carro.crudCarros.entity.Carro;
//import carro.crudCarros.repository.CarroRepository;
import carro.crudCarros.repository.AcessorioRepository;

@Service
public class AcessorioService {

	@Autowired
	private AcessorioRepository acessorioRepository;
	
	/*public String save(Carro carro) {
		//
		this.carroRepository.save(carro);
		
		return "Carro salvo com sucesso!";
	}*/
	
	public String save(Acessorio acessorio) {
		this.acessorioRepository.save(acessorio);
		return "Acessorio salvo com sucesso!";
	}
	
	
	public List<Acessorio> findAll(){
		List<Acessorio> Lista = this.acessorioRepository.findAll();
		return Lista;
	}
	
	
}
