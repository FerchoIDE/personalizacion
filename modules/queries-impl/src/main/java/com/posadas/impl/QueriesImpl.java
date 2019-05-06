package com.posadas.impl;

import com.liferay.admin.kernel.util.Omniadmin;
import com.posadas.api.Queries;

import org.osgi.service.component.annotations.Component;

/**
 * @author Fercho
 */
@Component(
	immediate = true,
	property = {
		// TODO enter required service properties
	},
	service = Queries.class
)
public class QueriesImpl implements Queries {

	@Override
	public String sayHello() {
		// TODO Auto-generated method stub
		return "HEllo";
	}

	// TODO enter required service methods

}