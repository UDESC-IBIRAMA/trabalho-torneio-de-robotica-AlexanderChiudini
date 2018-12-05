package udesc.ceavi.robotica.controller;

import udesc.ceavi.robotica.model.Temporada;
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
import udesc.ceavi.robotica.repositorio.TemporadaRepositorio;

/**
 *
 * @author Aparicio
 */
@RestController
@RequestMapping("/temporadas")
public class TemporadaController {
    
    @Autowired
    private TemporadaRepositorio tem;
    
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/{id}")
    public Temporada buscar(@PathVariable long id) {
        return tem.findById(id).get();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<Temporada> buscar() {
        return tem.findAll();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public Temporada salvar(@RequestBody Temporada temporada) {
        return tem.save(temporada);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/{id}")
    public void deletar(@PathVariable long id) {
        tem.deleteById(id);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/{id}")
    public Temporada atualizar(@PathVariable long id, @RequestBody Temporada temp) {
        Optional<Temporada> tempSalvo = tem.findById(id);
        Temporada t = tempSalvo.get();//Transforma optional na entidade
        BeanUtils.copyProperties(temp, t, "id");
        tem.save(t);
        return t;
    }
    
}
