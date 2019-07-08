package generatorviewclient.models;

import java.util.List;

import com.liferay.document.library.kernel.model.DLFileEntry;
import com.liferay.document.library.kernel.model.DLFolder;

public class Files {

	DLFileEntry fileentry;
	DLFolder subfolder;
	List<Files> files;
	public DLFileEntry getFileentry() {
		return fileentry;
	}
	public void setFileentry(DLFileEntry fileentry) {
		this.fileentry = fileentry;
	}
	public DLFolder getSubfolder() {
		return subfolder;
	}
	public void setSubfolder(DLFolder subfolder) {
		this.subfolder = subfolder;
	}
	public List<Files> getFiles() {
		return files;
	}
	public void setFiles(List<Files> files) {
		this.files = files;
	}
	
	
	
	
	
	
}

