package udesc.ceavi.robotica.controller;

import udesc.ceavi.robotica.model.SalaAvaliacao;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import udesc.ceavi.robotica.repositorio.SalaAvaliacaoRepositorio;

/**
 *
 * @author Aparicio
 */

@RestController
@RequestMapping("/salas")
public class SalaAvaliacaoController {
    
    @Autowired
    private SalaAvaliacaoRepositorio sal;
    
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/{id}")
    public SalaAvaliacao buscar(@PathVariable long id) {
        return sal.findById(id).get();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<SalaAvaliacao> buscar() {
        return sal.findAll();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public SalaAvaliacao salvar(@RequestBody SalaAvaliacao s) {
        return sal.save(s);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/{id}")
    public void deletar(@PathVariable long id) {
        sal.deleteById(id);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/{id}")
    public SalaAvaliacao atualizar(@PathVariable long id, @RequestBody SalaAvaliacao sa) {
        Optional<SalaAvaliacao> salSalvo = sal.findById(id);
        SalaAvaliacao s = salSalvo.get();//Transforma optional na entidade
        BeanUtils.copyProperties(sa, s, "id");
        sal.save(s);
        return s;
    }
}
