package carro.crudCarros.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import carro.crudCarros.entity.Carro;
import carro.crudCarros.repository.CarroRepository;



@Service
public class CarroService {
	
	@Autowired
	private CarroRepository carroRepository;
	
	public String save(Carro carro) {
		//
		this.carroRepository.save(carro);
		
		return "Carro salvo com sucesso!";
	}
	
	public String update(Carro carro, Long id) {
		carro.setId(id);
		this.carroRepository.save(carro);
		
		//não existe um método update herdado do JPA, eh o próprio save, porém nós passoamos agora o id para ele saber
		//qual ele deve salver
		return "Carro foi atualizado com sucesso!";
		
	}
	
	public String delete(Long id) {
		this.carroRepository.deleteById(id);
		return "Carro deletado com sucesso!";
		
	}
	
	public List<Carro> findAll(){
		List<Carro> Lista = this.carroRepository.findAll();
		return Lista;
		
	}
	
	public Carro findById(Long id) {
		
		Carro carro = this.carroRepository.findById(id).get();
		return carro;
		
		
		//Optional<Carro> carro = this.carroRepository.findById(id);
		//return carro.get();
		
	}
	
	//vai filtrar no banco pelo nome
	public List<Carro> findByNome(String nome){
		return this.carroRepository.findByNome(nome);
	}
	
	public List<Carro> findAcimaAno(int ano){
		return this.carroRepository.findAcimaAno(ano);
	}
	

}
